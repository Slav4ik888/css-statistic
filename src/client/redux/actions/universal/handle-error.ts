import { MessageType } from "../../../../types";
import { Dispatch, TypeDispatch } from '../../redux-types';
import { uiActionType } from "../../action-types";
import logger from '../../../utils/client-logger/client-logger';


const log = logger(`handleError`);

export const getErrorMessages = (obj: object) => {
  if (typeof obj === `string`) return obj;
  
  let str = ``;

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      str += obj[key] + `.`;
    }
  }
  return str;
};


// Обработчик ошибок
export const handleError = (err, dispatch: Dispatch, type: TypeDispatch) => {
  console.log('err.response: ', err.response);
  console.log('err.response?.data: ', err.response?.data);
  dispatch({ type });

  const error = err.response?.data?.errors || err.response?.data?.general;

  if (error) {    
    dispatch({
      type: uiActionType.SET_MESSAGE,
      payload: {
        message: getErrorMessages(error),
        type: MessageType.WARNING,
      }
    });
  }
  else {
    log(type + ` : ` + err);
    dispatch({ type: uiActionType.SET_ERROR, payload: err.response?.data | err });
  }
};
