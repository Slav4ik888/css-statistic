import api from "../../../api";
import { Dispatch } from "../../../redux-types";
import { refBooksActionType as Type } from "../../../action-types";
import { handleError } from "../../universal/handle-error";
import { ResRefLoadUsers } from "../../../../../types";



export const loadUsers = () => async (dispatch: Dispatch) => {
  dispatch({ type: Type.LOADING_REF_ON });

  try {
    const { data: { users }}: ResRefLoadUsers = await api.get(`/loadUsers`);

    dispatch({ type: Type.SET_USERS, payload: users });
  }
  catch (err) {
    dispatch({ type: Type.SET_USERS, payload: [] });
    handleError(err, dispatch, Type.LOADING_REF_OFF)
  }
};
