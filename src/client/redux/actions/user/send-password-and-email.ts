import api from "../../api";
// Redux
import { userActionType, uiActionType } from "../../action-types";
import { Dispatch } from "../../redux-types";
// Logger
import logger from "../../../utils/client-logger/client-logger";
const log = logger(`sendPasswordResetEmail`);
// Types
import { successMessage } from "../ui";



// Отправить ссылку для восстановления пароля
export const sendPasswordResetEmail = (email: string) => async (dispatch: Dispatch) => {
  dispatch({ type: userActionType.LOADING_USER });

  try {
    let res: { data: { message?: string; } };

    res = await api.post(`/sendPasswordResetEmail`, { email });

    dispatch(successMessage(res.data.message));
    
    dispatch({ type: uiActionType.CLEAR_ERROR });
    dispatch({ type: userActionType.LOADING_USER_OFF });

  } catch (err) {
    log(err);
    dispatch({ type: userActionType.LOADING_USER_OFF });
    dispatch({ type: uiActionType.SET_ERROR, payload: err.response?.data });
  }
};
