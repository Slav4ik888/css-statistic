import api from "../../api";
import { Dispatch } from "../../redux-types";
import { refBooksActionType } from "../../action-types";
import { User } from "../../../../types";
import { getFio } from "../../../components/ref-books/utils/get-fio";
import mergeWithTemplate from "../../../components/user/profile/merge-with-template";
import { handleError } from "../universal/handle-error";
import { successMessage } from "../ui/ui";



export const addRefUser = (userData: User) => async (dispatch: Dispatch) => {
  dispatch({ type: refBooksActionType.LOADING_UPD_ON });
  dispatch({ type: refBooksActionType.SET_NEW_ID, payload: `` });

  try {
    let res: { data: { newUser: User } };
    res = await api.post(`/addRefUser`, userData);

    dispatch({
      type: refBooksActionType.UPDATE_REF_USER,
      payload: mergeWithTemplate(res.data.newUser)
    });
    dispatch({
      type: refBooksActionType.SET_NEW_ID,
      payload: res.data.newUser.id
    });

    dispatch(successMessage(`Пользователь: ${getFio(res.data.newUser.person)} - успешно добавлен!`));
  }
  catch (err) { handleError(err, dispatch, refBooksActionType.LOADING_UPD_OFF) }
};


export const updateRefUser = (userData: User) => async (dispatch: Dispatch) => {
  dispatch({ type: refBooksActionType.LOADING_UPD_ON });
  
  try {
    let res: { data: { user: User, message: string } };

    res = await api.post(`/updateRefUser`, userData);

    dispatch({
      type: refBooksActionType.UPDATE_REF_USER,
      payload: res.data.user
    });

    dispatch(successMessage(res.data.message));
  }
  catch (err) { handleError(err, dispatch, refBooksActionType.LOADING_UPD_OFF) }
};


export const deleteRefUser = ({ userId, email }: { userId: string, email: string }) => async (dispatch: Dispatch) => {
  dispatch({ type: refBooksActionType.LOADING_UPD_ON });
  
  try {
    let res: { data: { message: string } };

    res = await api.post(`/deleteRefUser`, { userId, email });

    dispatch({
      type: refBooksActionType.DELETE_REF_USER,
      payload: userId
    });

    dispatch(successMessage(res.data.message));
  }
  catch (err) { handleError(err, dispatch, refBooksActionType.LOADING_UPD_OFF) }
};