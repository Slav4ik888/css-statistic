import api from "../../../api";
import { Dispatch } from "../../../redux-types";
import { refBooksActionType as Type } from "../../../action-types";
import { handleError } from "../../universal/handle-error";
import { successMessage } from "../../ui";
import { ResRefDeleteUser } from "../../../../../types";
import * as Path from '../../../../../utils/paths';



export const deleteUser = (id: string, email: string) => async (dispatch: Dispatch) => {
  dispatch({ type: Type.LOADING_REF_ON });
  
  try {
    const { data: { message }}: ResRefDeleteUser = await api.post(Path.Users.DELETE, { email });

    dispatch({ type: Type.DELETE_REF_USER, payload: id });
    dispatch(successMessage(message));
  }
  catch (err) { handleError(err, dispatch, Type.LOADING_REF_OFF); }
};
