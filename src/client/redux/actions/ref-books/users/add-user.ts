import api from "../../../api";
import { Dispatch } from "../../../redux-types";
import { refBooksActionType as Type } from "../../../action-types";
import { handleError } from "../../universal/handle-error";
import { ResRefAddUser, User } from "../../../../../types";



export const addUser = (user: User) => async (dispatch: Dispatch) => {
  dispatch({ type: Type.LOADING_UPD_ON });

  try {
    const res: ResRefAddUser = await api.post(`/addUser`, user);
    dispatch({ type: Type.UPDATE_REF_USER, payload: res.data.user });
  }
  catch (err) { handleError(err, dispatch, Type.LOADING_UPD_OFF); }
};
