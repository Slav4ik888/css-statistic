import api from "../../api";
import { RouteType } from "../../../utils/routes/routes";
// Redux
// import { loadWeeks } from "../plans/plans";
import { userActionType, uiActionType, statsActionType } from "../../action-types";
import { Dispatch } from "../../redux-types";
// Functions
import logger from "../../../utils/client-logger/client-logger";
import { getCookie } from "../../../../utils/auth/cookies/cookies";
// Types
import { getStorageData } from "../../../utils/local-storage/local-storage";
import { successMessage, warningMessage } from "../ui";


const log = logger(`user-action`);


// Вход пользователя, загрузка стартовых данных
export const userLogin = (userData: any, history: { push: (path: string) => {} }) => async (dispatch: any) => {
  dispatch({ type: userActionType.LOADING_USER });
  const csrfToken = getCookie('session');
  log('csrfToken: ' + csrfToken);

  try {
    let res: { data: { message: string; } };

    res = await api.post(`/userLogin`, { userData, csrfToken });
       
    // Загрузить Roles & данные пользователя
    // dispatch(getUser());
    
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


// Выход пользователя
export const userLogout = (email: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: userActionType.SET_UNAUTHENTICATED });
    dispatch({ type: statsActionType.SET_INITIAL }); // Очищаем данные в data-reducer
    dispatch({ type: uiActionType.CLEAR_ERROR });
    
    await api.post(`/userLogout`, { email });

  }
  catch (err: any) {
    log(err);
    dispatch({ type: userActionType.SET_UNAUTHENTICATED });
    dispatch({ type: uiActionType.SET_ERROR, payload: err.response?.data });
  }
};
