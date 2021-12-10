import { uiActionType, userActionType, statActionType } from './action-types';
import { Message, Errors, ScreenFormats, SelectedDates } from '../../types';


export type TypeDispatch = Function | uiActionType | userActionType | statActionType;

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

export interface StateStat {
  loading       : boolean;
  selectedDates : SelectedDates;

  cssDb         : Array<any>;
  cssInstDb     : Array<any>;
  cssExpDb      : Array<any>;
  badcomDb      : Array<any>; 
};


export interface State {
  UI        : StateUI;
  user      : StateUser;
  data      : StateStat;
};