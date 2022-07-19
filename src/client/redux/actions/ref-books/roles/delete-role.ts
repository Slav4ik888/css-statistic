import api from "../../../api";
import { Dispatch } from "../../../redux-types";
import { refBooksActionType as Type } from "../../../action-types";
import { handleError } from "../../universal/handle-error";
import { successMessage } from "../../ui";
import { ResRefDeleteRole } from "../../../../../types";


export const deleteRole = (roleId: string) => async (dispatch: Dispatch) => {
  dispatch({ type: Type.LOADING_REF_ON });
  
  try {
    const res: ResRefDeleteRole = await api.post(`/deleteRole`, { roleId });

    dispatch({ type: Type.DELETE_ROLE, payload: roleId });
    dispatch(successMessage(res.data.message));
  }
  catch (err) { handleError(err, dispatch, Type.LOADING_REF_OFF); }
};
