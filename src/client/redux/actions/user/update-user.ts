import api from "../../api";
import { dataActionType, uiActionType, userActionType as Type } from "../../action-types";
// Functions
import logger from "../../../utils/client-logger/client-logger";
const log = logger(`updateUser`);
// Types
import { User, ResUpdateUser } from "../../../../types";
import { successMessage } from "../ui";
import { handleError } from "../universal/handle-error";

const update = async (dispatch: any, user: User, owner: boolean) => {
  dispatch({ type: Type.LOADING_USER });

  try {
    const res: ResUpdateUser = await api.post(`/updateUser`, { user });

    if (owner) dispatch({ type: Type.UPDATE_USER, payload: user });
    dispatch({ type: dataActionType.UPDATE_USER, payload: user });
    
    dispatch(successMessage(res.data.message));
    dispatch({ type: Type.LOADING_USER_OFF });
    dispatch({ type: uiActionType.CLEAR_ERROR });
  }
  catch (err) { handleError(err, dispatch, Type.LOADING_USER_OFF) }
};


// Обновление данных о пользователе
export const updateUser = (user: User) => (dispatch: any) => update(dispatch, user, true);


// Обновление данных о пользователе
export const updateAnyUser = (user: User) => (dispatch: any) => update(dispatch, user, false);
