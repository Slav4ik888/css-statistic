import api from "../../../api";
import { Dispatch } from "../../../redux-types";
import { refBooksActionType as Type } from "../../../action-types";
import { handleError } from "../../universal/handle-error";
import { Role, ResRefUpdateRole } from "../../../../../types";
import { successMessage } from "../../ui";


export const updateRole = (role: Role) => async (dispatch: Dispatch) => {
  dispatch({ type: Type.LOADING_REF_ON });

  try {
    const res: ResRefUpdateRole = await api.post(`/updateRole`, { role });
  
    dispatch({ type: Type.UPDATE_ROLE, payload: res.data.role });
    dispatch(successMessage(res.data.message));
  }
  catch (err) { handleError(err, dispatch, Type.LOADING_REF_OFF); }
};
