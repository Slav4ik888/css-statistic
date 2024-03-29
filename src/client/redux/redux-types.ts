import { uiActionType, userActionType, statsActionType } from './action-types';
import { Message, Errors, ScreenFormats, SelectedDates, DbItem } from '../../types';



export type TypeDispatch = Function | uiActionType | userActionType | statsActionType;

type Payload = string | {};

export type Dispatch = (arg0: { type?: TypeDispatch; payload?: Payload }) => void;


export interface StateUI {
  loading         : boolean;
  message         : Message;
  errors          : Errors;
  screenFormats   : ScreenFormats;
  screenSize      : number;
};

export interface StateUser {
  loading         : boolean;
  authenticated   : boolean;
};

export interface StateStats {
  loading       : boolean;
  selectedDates : SelectedDates;

  cssDb         : Array<DbItem>; // Да - Инциденты
  cssInstDb     : Array<DbItem>; // Да - Инсталляции
  cssExpDb      : Array<DbItem>; // Да - Опытное пр-во
  badcomDb      : Array<DbItem>; // Badcom 
};


export interface State {
  UI        : StateUI;
  user      : StateUser;
  stats     : StateStats;
};