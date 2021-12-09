import { MessageType } from './messages';
import { Errors } from './errors';


export type Validation = {
  errors : Errors;
  valid  : boolean;
};

// Тип для результата
export enum ResultType {
  SUCCESS = `success`,
  ERROR   = `error`,
  WARNING = `warning`,
};

// Тип для данных по проведённой проверке
export interface ResultAccess {
  result       : ResultType,
  message?     : string,
  messageType? : MessageType,
};