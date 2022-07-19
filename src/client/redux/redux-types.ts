import { uiActionType, userActionType, statsActionType, refBooksActionType } from './action-types';
import { Message, Errors, ScreenFormats, SelectedDates, DbItem, User, Users, Roles } from '../../types';


export type TypeDispatch = Function | uiActionType | refBooksActionType | userActionType | statsActionType;
type Payload = string | {};
export type Dispatch = (arg0: { type?: TypeDispatch; payload?: Payload }) => void;


export interface StateUI {
  loading         : boolean;
  message         : Message;
  errors          : Errors;
  screenFormats   : ScreenFormats;
  screenSize      : number;
};

// export interface StateData {
//   loading : boolean;
//   roles   : Roles;
//   users   : Users;
// };

export interface StateUser {
  loading         : boolean;
  authenticated   : boolean;

  user            : User;
  userCredentials : object;
};


export interface StateStats {
  loading       : boolean;
  selectedDates : SelectedDates;

  cssDb         : Array<DbItem>; // Да - Инциденты
  cssInstDb     : Array<DbItem>; // Да - Инсталляции
  cssExpDb      : Array<DbItem>; // Да - Опытное пр-во
  badcomDb      : Array<DbItem>; // Badcom 
};

export interface StateRefBooks {
  loading : boolean;
  
  newId   : string;  // Созданный Id для нового элемента Справочника
  
  roles   : Roles;   // Роли
  users   : Users;   // Сотрудники
};

export interface State {
  UI        : StateUI;
  // data      : StateData;
  user      : StateUser;
  stats     : StateStats;
  refbooks  : StateRefBooks;
};
