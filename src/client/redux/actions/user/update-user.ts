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
 * @param userData 
 * @param profile - если пользователь обновил СВОИ данные в профиле
 */
export const update = async (dispatch: any, userData: Partial<User>, profile: boolean) => {
  dispatch({ type: Type.LOADING_USER });

  try {
    const { data: { user } }: ResRefUpdateUser = profile
      ? await api.post(Path.User.UPDATE_USER, { userData })
      : await api.post(Path.Users.UPDATE, { userData });

    if (profile) dispatch({ type: Type.UPDATE_USER, payload: user });
    dispatch({ type: refBooksActionType.UPDATE_REF_USER, payload: user });
    
    dispatch(successMessage(`Данные сохранены`));
    dispatch({ type: Type.LOADING_USER_OFF });
    dispatch({ type: uiActionType.CLEAR_ERROR });
  }
  catch (err) { handleError(err, dispatch, Type.LOADING_USER_OFF); }
};


/**
 * Обновление своих данных пользователем
 */
export const updateUser = (user: User) => (dispatch: any) => update(dispatch, user, true);

