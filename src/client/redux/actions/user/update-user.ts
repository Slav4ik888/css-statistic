import api from "../../api";
import { refBooksActionType, uiActionType, userActionType as Type } from "../../action-types";
import { successMessage } from "../ui";
// Functions
import { handleError } from "../universal/handle-error";
// Types
import { User, ResRefUpdateUser } from "../../../../types";


/**
 * Universal function for update
 * @param dispatch 
 * @param user 
 * @param owner - если пользователь обновил СВОИ данные
 */
const update = async (dispatch: any, user: User, owner: boolean) => {
  dispatch({ type: Type.LOADING_USER });

  try {
    const { data: { message }}: ResRefUpdateUser = await api.post(`/updateUser`, { user });

    if (owner) dispatch({ type: Type.UPDATE_USER, payload: user });
    dispatch({ type: refBooksActionType.UPDATE_REF_USER, payload: user });
    
    dispatch(successMessage(message));
    dispatch({ type: Type.LOADING_USER_OFF });
    dispatch({ type: uiActionType.CLEAR_ERROR });
  }
  catch (err) { handleError(err, dispatch, Type.LOADING_USER_OFF); }
};


/**
 * Обновление своих данных пользователем
 */
export const updateUser = (user: User) => (dispatch: any) => update(dispatch, user, true);


/**
 * Обновление данных другого пользователя
 */
export const updateAnyUser = (user: User) => (dispatch: any) => update(dispatch, user, false);
