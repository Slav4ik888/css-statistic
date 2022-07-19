import { Dispatch, TypeDispatch } from '../../redux-types';
import { uiActionType } from "../../action-types";
import logger from '../../../utils/client-logger/client-logger';
import { warningMessage } from "../ui";
import { noEmpty } from "../../../../utils/objects";
import { AxiosError } from "axios";


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


interface AnyError {
  errors   : string,
  general  : string,
  email    : string,
  password : string
};

export const handleError = (err: AxiosError<AnyError>, dispatch: Dispatch, type: TypeDispatch) => {
  console.log('err.code: ', err.code);
  console.log('err.response.status: ', err.response?.status);
  console.log('err.response.statusText: ', err.response?.statusText);
  console.log('err.response.data: ', err.response?.data);
  dispatch({ type });

  const errorObject = err.response?.data;
  let errorMessage = err.response?.data?.errors
    || err.response?.data?.general
    || err.response?.data?.email
    || err.response?.data?.password
    // || JSON.stringify(errorObject);

  switch (err.response?.statusText) {
    case `Forbidden`: errorMessage = `Для продолжения, необходимо авторизоваться.`; break;
    // case 403: errorMessage = `Не верный пароль.`; break;
  }
  
  log(`errorObject:`, errorObject);
  log(`errorMessage:`, errorMessage);

  if (errorMessage) dispatch(warningMessage(errorMessage));
  if (noEmpty(errorObject)) dispatch({ type: uiActionType.SET_ERROR, payload: errorObject });
};

