import api from "../../api";
import { Dispatch } from "../../redux-types";
import { dataActionType as Type } from "../../action-types";
import { handleError } from "../universal/handle-error";
import { ResAddRole, Role } from "../../../../types";



export const addRole = (role: Role) => async (dispatch: Dispatch) => {
  dispatch({ type: Type.LOADING_DATA });

  try {
    const res: ResAddRole = await api.post(`/addRole`, { role });

    dispatch({ type: Type.ADD_ROLE, payload: res.data.role });
  }
  catch (err) { handleError(err, dispatch, Type.LOADING_DATA_OFF) }
};
