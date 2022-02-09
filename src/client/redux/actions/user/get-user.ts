import api from "../../api";
import { uiActionType, userActionType as Type } from "../../action-types";
// Functions
import logger from "../../../utils/client-logger/client-logger";
const log = logger(`getUser`);
// Types
import { User, Roles } from "../../../../types";
import { warningMessage } from "../ui";
import mergeWithTemplate from "../../../components/users/merge-with-template";



// Получение данных о пользователе
export const getUser = () => async (dispatch: any) => {
  dispatch({ type: Type.LOADING_USER });

  try {
    let res: { data: { user: User, roleCreds: object } };

    res = await api.get(`/getStartResourses`);
    const user = mergeWithTemplate(res.data.user);

    dispatch({ type: Type.SET_USER, payload: user });
    dispatch({ type: Type.SET_CREDENTIALS, payload: res.data.roleCreds });
    
    
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
