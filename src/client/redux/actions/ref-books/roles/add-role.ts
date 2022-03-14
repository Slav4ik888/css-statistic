import api from "../../../api";
import { Dispatch } from "../../../redux-types";
import { refBooksActionType as Type } from "../../../action-types";
import { handleError } from "../../universal/handle-error";
import { ResRefAddRole } from "../../../../../types";



export const addRole = () => async (dispatch: Dispatch) => {
  dispatch({ type: Type.LOADING_UPD_ON });
  dispatch({ type: Type.SET_NEW_ID, payload: `` });

  try {
    const res: ResRefAddRole = await api.get(`/addRole`);
  
    dispatch({ type: Type.UPDATE_ROLE, payload: res.data.role });
    dispatch({ type: Type.SET_NEW_ID,  payload: res.data.role.id });
  }
  catch (err) { handleError(err, dispatch, Type.LOADING_UPD_OFF) }
};
