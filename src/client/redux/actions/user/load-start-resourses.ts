import api from "../../api";
import { refBooksActionType as refBooksType, uiActionType, userActionType as Type } from "../../action-types";
// Functions
import logger from "../../../utils/client-logger/client-logger";
const log = logger(`loadStartResourses`);
// Types
import { ResGetStartResourses } from "../../../../types";
import { warningMessage } from "../ui";
import mergeWithTemplate from "../../../components/users/merge-with-template";



/**
 * Loading start-resourses
 */
export const loadStartResourses = () => async (dispatch: any) => {
  dispatch({ type: Type.LOADING_USER });

  try {
    const { data: { roleCreds, roles, users, user }}: ResGetStartResourses = await api.get(`/getStartResourses`);

    dispatch({ type: Type.SET_USER,          payload: mergeWithTemplate(user) });
    dispatch({ type: Type.SET_CREDENTIALS,   payload: roleCreds });
    dispatch({ type: refBooksType.SET_ROLES, payload: roles });
    dispatch({ type: refBooksType.SET_USERS, payload: users });
    
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
