import { Dispatch } from "../../redux-types";
import { dataActionType as Type } from "../../action-types";
import { handleError } from "../universal/handle-error";
import api from "../../api";
import { LoadUsers } from "../../../../types";



export const loadUsers = () => async (dispatch: Dispatch) => {
  dispatch({ type: Type.LOADING_DATA });

  try {
    const res: LoadUsers = await api.get(`/loadUsers`);

    dispatch({ type: Type.SET_USERS, payload: res.data.users });
    dispatch({ type: Type.LOADING_DATA_OFF });
  }
  catch (err) {
    dispatch({ type: Type.SET_USERS, payload: [] });
    handleError(err, dispatch, Type.LOADING_DATA_OFF)
  }
};
