import { Dispatch } from '../../redux-types';
import { uiActionType } from '../../action-types';
import { Errors, Message, MessageType } from '../../../../types';
// Functions
import { DisplayError } from '../../../../templates/errors/display-errors';



// Сохраняем значение текущего размера окна браузера пользователя
export const setScreenFormats = (size: number) => (dispatch: Dispatch) => {
  return dispatch({ type: uiActionType.SET_SCREEN_FORMATS, payload: size })
};



// Сохраняем сообщение для пользователя
export const setMessage = (message: Message) => (dispatch: Dispatch) => {
  dispatch({
    type: uiActionType.SET_MESSAGE,
    payload: message,
  });
};


// Вывод сообщения об какой-то ошибке (странной ситуации)
export const showWarning = (error: DisplayError, data?: string) => (dispatch: any) => {
  const textData = ` Данные: ${data}`;

  const message: Message = {
    type: MessageType.WARNING,
    message: `${error}${data ? textData : ""}`
  };

  dispatch(setMessage(message));
};


/**
 * For dispatch 
 */
export const successMessage = (message: string) => ({
  type: uiActionType.SET_MESSAGE,
  payload: { message, type: MessageType.SUCCESS }
});
export const warningMessage = (message: string) => ({
  type: uiActionType.SET_MESSAGE,
  payload: { message, type: MessageType.WARNING }
});
export const errorMessage = (message: string) => ({
  type: uiActionType.SET_MESSAGE,
  payload: { message, type: MessageType.ERROR }
});


export const setSuccessMessage = (message: string) => (dispatch: any) => dispatch(successMessage(message));
export const setWarningMessage = (message: string) => (dispatch: any) => dispatch(warningMessage(message));
export const setErrorMessage   = (message: string) => (dispatch: any) => dispatch(errorMessage(message));


// Очищаем сообщение
export const clearMessage = () => (dispatch: Dispatch) => dispatch({ type: uiActionType.CLEAR_MESSAGE });


// Сохраняем ошибку
export const setErrors = (errors: Errors) => (dispatch: Dispatch) => {
  dispatch({ type: uiActionType.SET_ERROR, payload: errors })
};


// Очищаем ошибки
export const clearErrors = () => (dispatch: Dispatch) => dispatch({ type: uiActionType.CLEAR_ERROR });
