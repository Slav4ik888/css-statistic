import api from "../../api";
import { RouteType } from "../../../utils/routes/routes";
// Redux
import { userActionType, uiActionType } from "../../action-types";
// Functions
import { getCookie } from "../../../../utils/auth/cookies/cookies";
import { getUser } from "./get-user";
// Logger
import logger from "../../../utils/client-logger/client-logger";
const log = logger(`user-action`);
// Types
import { successMessage } from "../ui";



// Вход пользователя, загрузка стартовых данных
export const userLogin = (userData: any, history: { push: (path: string) => {} }) => async (dispatch: any) => {
  dispatch({ type: userActionType.LOADING_USER });
  const csrfToken = getCookie('session');
  log('csrfToken: ' + csrfToken);

  try {
    let res: { data: { message: string; } };

    res = await api.post(`/userLogin`, { userData, csrfToken });
       
    // Загрузить Roles & данные пользователя
    dispatch(getUser());
    
    dispatch(successMessage(res.data.message));

    history.push(RouteType.ROOT);
    dispatch({ type: userActionType.LOADING_USER_OFF });
    dispatch({ type: uiActionType.CLEAR_ERROR });
  }
  catch (err: any) {
    log(err);
    dispatch({ type: userActionType.SET_UNAUTHENTICATED });
    dispatch({ type: uiActionType.SET_ERROR, payload: err.response?.data });
  }
};
