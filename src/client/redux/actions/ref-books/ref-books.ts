import api from '../../api';
import { Dispatch, StateRefBooks } from '../../redux-types';
import { refBooksActionType as Type } from '../../action-types';
import { ResLoadRefbook, ResLoadRefbooksByIds, RefbookId, Strings } from '../../../../types';
import { addRole } from '.';
import { RefbooksList } from '../../../consts/reference-books-list';
import { handleError } from '../universal/handle-error';
import { successMessage } from '../ui';
import { deleteRole } from './roles';



/**
 * Загрузить 1 Справочник
 */
export const loadRefbook = (id: RefbookId) => async (dispatch: Dispatch) => {
  dispatch({ type: Type.LOADING_REF_ON });

  try {    
    const res: ResLoadRefbook = await api.post(`/loadCollection`, { colName: id, successMessage: `Справочник загружен!` });
    
    dispatch({
      type: Type.SET_REF_BOOK,
      payload: { id, refBook: res.data.items }
    });
    dispatch(successMessage(res.data.message));
  }
  catch (err) { handleError(err, dispatch, Type.LOADING_UPD_OFF) }
};


// Загружаем список Справочников по ids
export const loadRefbooksByIds = (refBooksIds: Strings) => async (dispatch: Dispatch) => {
  dispatch({ type: Type.LOADING_REF_ON });

  try {    
    const res: ResLoadRefbooksByIds = await api.post(`/loadRefbooksByIds`, { refBooksIds });

    res.data.refBooks?.forEach(refBook => {
      dispatch({
        type: Type.SET_REF_BOOK,
        payload: { id: refBook.id, refBook: refBook.refbook }
      });
    });
  }
  catch (err) { handleError(err, dispatch, Type.LOADING_UPD_OFF) }
};


// Загружаем все НЕзагруженные Справочники
export const loadAllRefBooks = (refBooks?: StateRefBooks) => async (dispatch: any) => {
  try {
    let refBooksIds = [] as Array<string>;

    RefbooksList.forEach(book => {
      if (!book.id || book.disabled) return;
      if (refBooks[book.id]) return console.log(`Справочник [${book.id}] уже загружен`);
    
      refBooksIds.push(book.id);
    });

    if (!refBooksIds.length) return;

    dispatch(loadRefbooksByIds(refBooksIds));
  }
  catch (err) { handleError(err, dispatch, Type.LOADING_UPD_OFF) }
};


// Создаём новый элемент в Справочника
export const addNewElement = (refBookId: RefbookId, companyId?: string) => async (dispatch: any) => {

  switch (refBookId) {
    case RefbookId.ROLES: return dispatch(addRole());
    // case 'users'  : return dispatch(addRefUser());

    default: return console.log(`addNewElement - выбрали не существующий RefbookId`);
  }
};


// Удаляем элемент из Справочника
export const deleteElement = (refBookId: RefbookId, id: string, email?: string) => async (dispatch: any) => {

  switch (refBookId) {
    case RefbookId.ROLES : return dispatch(deleteRole(id));
    // case RefbookId.USERS : return dispatch(deleteRefUser({ userId: id, email }));
    
    default: return console.log(`deleteElement - выбрали не существующий RefbookId`);
  }
};

