import { uiActionType, userActionType, statsActionType, dataActionType } from './action-types';
import { Message, Errors, ScreenFormats, SelectedDates, DbItem, User, Users } from '../../types';


export type TypeDispatch = Function | uiActionType | dataActionType | userActionType | statsActionType;

type Payload = string | {};

export type Dispatch = (arg0: { type?: TypeDispatch; payload?: Payload }) => void;


export interface StateUI {
  loading         : boolean;
  message         : Message;
  errors          : Errors;
  screenFormats   : ScreenFormats;
  screenSize      : number;
};

export interface StateData {
  loading : boolean;
  users   : Users;
};

export interface StateUser {
  loading         : boolean;
  authenticated   : boolean;

  user            : User;
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
  data      : StateData;
  user      : StateUser;
  stats     : StateStats;
};
