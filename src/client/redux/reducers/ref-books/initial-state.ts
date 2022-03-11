import { StateRefBooks } from '../../redux-types';


export const initialState: StateRefBooks = {
  loadingRef     : false, // Загрузка Справочника
  loadingUpd     : false, // Обновление Элементов

  newId          : ``,    // Созданный Id для нового элемента Справочника

  roles          : null, // Роли
  users          : null, // Сотрудники
};
