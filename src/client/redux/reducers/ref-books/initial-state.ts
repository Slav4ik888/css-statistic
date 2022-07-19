import { StateRefBooks } from '../../redux-types';


export const initialState: StateRefBooks = {
  loading : false,

  newId   : ``,   // Созданный Id для нового элемента Справочника

  roles   : null, // Роли
  users   : null, // Сотрудники
};
