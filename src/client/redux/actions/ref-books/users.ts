import api from "../../api";
import { Dispatch } from "../../redux-types";
import { refBooksActionType } from "../../action-types";
import { ResRefAddUser, ResRefDeleteUser, User } from "../../../../types";
import { getFio } from "../../../components/ref-books/utils/get-fio";
import mergeWithTemplate from "../../../components/users/merge-with-template";
import { handleError } from "../universal/handle-error";
import { successMessage } from "../ui";



export const addRefUser = (userData: User) => async (dispatch: Dispatch) => {
  dispatch({ type: refBooksActionType.LOADING_UPD_ON });
  dispatch({ type: refBooksActionType.SET_NEW_ID, payload: `` });

  try {
    const res: ResRefAddUser = await api.post(`/addRefUser`, userData);

    dispatch({
      type: refBooksActionType.UPDATE_REF_USER,
      payload: mergeWithTemplate(res.data.user)
    });
    dispatch({
      type: refBooksActionType.SET_NEW_ID,
      payload: res.data.user.id
    });

    dispatch(successMessage(`Пользователь: ${getFio(res.data.user.person)} - успешно добавлен!`));
  }
  catch (err) { handleError(err, dispatch, refBooksActionType.LOADING_UPD_OFF) }
};


// export const updateRefUser = (userData: User) => async (dispatch: Dispatch) => {
//   dispatch({ type: refBooksActionType.LOADING_UPD_ON });
  
//   try {
//     const res: ResRefUpdateUser = await api.post(`/updateRefUser`, userData);

//     dispatch({
//       type: refBooksActionType.UPDATE_REF_USER,
//       payload: res.data.user
//     });

//     dispatch(successMessage(res.data.message));
//   }
//   catch (err) { handleError(err, dispatch, refBooksActionType.LOADING_UPD_OFF) }
// };


export const deleteRefUser = ({ userId, email }: { userId: string, email: string }) => async (dispatch: Dispatch) => {
  dispatch({ type: refBooksActionType.LOADING_UPD_ON });
  
  try {
    const res: ResRefDeleteUser = await api.post(`/deleteRefUser`, { userId, email });

    dispatch({
      type: refBooksActionType.DELETE_REF_USER,
      payload: userId
    });

    dispatch(successMessage(res.data.message));
  }
  catch (err) { handleError(err, dispatch, refBooksActionType.LOADING_UPD_OFF) }
};
