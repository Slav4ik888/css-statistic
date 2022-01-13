import api from "../../api";
// Redux
import { userActionType as Type, uiActionType, statsActionType } from "../../action-types";
import { Dispatch } from "../../redux-types";
// Logger
import logger from "../../../utils/client-logger/client-logger";
const log = logger(`userLogout`);



// Выход пользователя
export const userLogout = (email: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: Type.SET_UNAUTHENTICATED });
    dispatch({ type: statsActionType.SET_INITIAL }); // Очищаем данные в data-reducer
    dispatch({ type: uiActionType.CLEAR_ERROR });
    
    await api.post(`/userLogout`, { email });

  }
  catch (err: any) {
    log(err);
    dispatch({ type: Type.SET_UNAUTHENTICATED });
    dispatch({ type: uiActionType.SET_ERROR, payload: err.response?.data });
  }
};
