import api from "../../api";
import { dataActionType, uiActionType, userActionType as Type } from "../../action-types";
// Functions
import logger from "../../../utils/client-logger/client-logger";
const log = logger(`getUser`);
// Types
import { ResGetStartResourses } from "../../../../types";
import { warningMessage } from "../ui";
import mergeWithTemplate from "../../../components/users/merge-with-template";



// Получение данных о пользователе
export const getUser = () => async (dispatch: any) => {
  dispatch({ type: Type.LOADING_USER });

  try {
    const res: ResGetStartResourses = await api.get(`/getStartResourses`);
    const user = mergeWithTemplate(res.data.user);

    dispatch({ type: Type.SET_USER,            payload: user });
    dispatch({ type: Type.SET_CREDENTIALS,     payload: res.data.roleCreds });
    dispatch({ type: dataActionType.SET_ROLES, payload: res.data.roles });
    dispatch({ type: dataActionType.SET_USERS, payload: res.data.users });
    
    dispatch({ type: uiActionType.CLEAR_ERROR });
  }
  catch (err) {
    log(err);
    dispatch({ type: Type.SET_UNAUTHENTICATED });

    if (err.response?.data.message) dispatch(warningMessage(err.response?.data.message));
    else {
      log(err);
      dispatch({ type: uiActionType.SET_ERROR, payload: err.response?.data | err });
    }
  }
};
