import api from "../../api";
import { refBooksActionType, uiActionType, userActionType as Type } from "../../action-types";
import { successMessage } from "../ui";
import * as Path from '../../../../utils/paths';
// Functions
import { handleError } from "../universal/handle-error";
// Types
import { User, ResRefUpdateUser } from "../../../../types";


/**
 * Universal function for update
 * @param dispatch 
 * @param user 
 * @param profile - если пользователь обновил СВОИ данные в профиле
 */
export const update = async (dispatch: any, user: Partial<User>, profile: boolean) => {
  dispatch({ type: Type.LOADING_USER });

  try {
    const { data: { message } }: ResRefUpdateUser = profile
      ? await api.post(Path.User.UPDATE_USER, { user })
      : await api.post(Path.Users.UPDATE, { user });

    if (profile) dispatch({ type: Type.UPDATE_USER, payload: user });
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

