import api from "../../../api";
import { Dispatch } from "../../../redux-types";
import { refBooksActionType as Type } from "../../../action-types";
import { handleError } from "../../universal/handle-error";
import { ResRefUpdateUser, User } from "../../../../../types";
import * as Path from '../../../../../utils/paths';
import mergeWithTemplate from "../../../../components/users/merge-with-template";
import { successMessage } from "../../ui";



export const updateUser = (userData: Partial<User>) => async (dispatch: Dispatch) => {
  dispatch({ type: Type.LOADING_REF_ON });

  try {
    const { data: { user, message }}: ResRefUpdateUser = await api.post(Path.Users.UPDATE, userData);

    dispatch({
      type: Type.UPDATE_REF_USER,
      payload: mergeWithTemplate(user)
    });

    dispatch(successMessage(message));
  }
  catch (err) { handleError(err, dispatch, Type.LOADING_REF_OFF); }
};
