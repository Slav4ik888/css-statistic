import api from "../../api";
import { Dispatch } from "../../redux-types";
import { dataActionType as Type } from "../../action-types";
import { handleError } from "../universal/handle-error";
import { ResAddUser, User } from "../../../../types";



export const addUser = (user: User) => async (dispatch: Dispatch) => {
  dispatch({ type: Type.LOADING_DATA });

  try {
    const res: ResAddUser = await api.post(`/addUser`, user);

    dispatch({ type: Type.ADD_USER, payload: res.data.user });
    dispatch({ type: Type.LOADING_DATA_OFF });
  }
  catch (err) { handleError(err, dispatch, Type.LOADING_DATA_OFF) }
};
