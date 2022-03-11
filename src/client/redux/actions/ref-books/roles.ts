import api from "../../api";
import { Dispatch } from "../../redux-types";
import { refBooksActionType } from "../../action-types";
import { Role } from "../../../../types";
import { handleError } from "../universal/handle-error";
import { successMessage } from "../ui/ui";


export const deleteRole = (roleId: string) => async (dispatch: Dispatch) => {
  dispatch({ type: refBooksActionType.LOADING_UPD_ON });
  
  try {
    let res: { data: { message: string } };

    res = await api.post(`/deleteRole`, { roleId });

    dispatch({
      type: refBooksActionType.DELETE_ROLE,
      payload: roleId
    });

    dispatch(successMessage(res.data.message));
  }
  catch (err) { handleError(err, dispatch, refBooksActionType.LOADING_UPD_OFF) }
};
