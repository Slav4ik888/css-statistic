import api from "../../../api";
import { Dispatch } from "../../../redux-types";
import { refBooksActionType as Type } from "../../../action-types";
import { handleError } from "../../universal/handle-error";
import { ResRefAddUser, User } from "../../../../../types";
import * as Path from '../../../../../utils/paths';
import mergeWithTemplate from "../../../../components/users/merge-with-template";
import { successMessage } from "../../ui";
import { getFio } from "../../../../utils/helpers";



export const addUser = (userData: User) => async (dispatch: Dispatch) => {
  dispatch({ type: Type.LOADING_REF_ON });
  dispatch({ type: Type.SET_NEW_ID, payload: `` });

  try {
    const { data: { user }}: ResRefAddUser = await api.post(Path.Users.ADD, userData);

    dispatch({
      type: Type.UPDATE_REF_USER,
      payload: mergeWithTemplate(user)
    });
    dispatch({
      type: Type.SET_NEW_ID,
      payload: user.id
    });

    dispatch(successMessage(`Пользователь: ${getFio(user.person)} - успешно добавлен!`));
  }
  catch (err) { handleError(err, dispatch, Type.LOADING_REF_OFF); }
};
