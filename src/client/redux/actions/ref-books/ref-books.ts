import api from '../../api';
import { Dispatch, StateRefBooks } from '../../redux-types';
import { refBooksActionType as Type } from '../../action-types';
import { ResLoadRefBook, ResLoadRefbooksByList, RefBookId, RefBookItem, Strings } from '../../../../types';
import { addRole } from '.';
import { ReferenceBooksList } from '../../../consts/reference-books-list';
import { handleError } from '../universal/handle-error';
import { successMessage } from '../ui';



// Загрузить 1 Справочник
export const loadRefBook = (id: RefBookId) => async (dispatch: Dispatch) => {
  dispatch({ type: Type.LOADING_REF_ON });

  try {    
    const res: ResLoadRefBook = await api.post(`/loadCollection`, { colName: id, successMessage: `Справочник загружен!` });
    
    dispatch({
      type: Type.SET_REF_BOOK,
      payload: { id, refBook: res.data.items }
    });
    dispatch(successMessage(res.data.message));
  }
  catch (err) { handleError(err, dispatch, Type.LOADING_UPD_OFF) }
};


// Загружаем список Справочников по ids
export const loadRefBooks = (refBooksIds: Strings) => async (dispatch: Dispatch) => {
  dispatch({ type: Type.LOADING_REF_ON });

  try {    
    const res: ResLoadRefbooksByList = await api.post(`/loadRefbooksByList`, { refBooksIds });

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

    ReferenceBooksList.forEach(book => {
      if (!book.id || book.disabled) return;
      if (refBooks[book.id]) return console.log(`Справочник [${book.id}] уже загружен`);
    
      refBooksIds.push(book.id);
    });

    if (!refBooksIds.length) return;

    dispatch(loadRefBooks(refBooksIds));
  }
  catch (err) { handleError(err, dispatch, Type.LOADING_UPD_OFF) }
};


// Создаём новый элемент в Справочника
export const addNewElement = (refBookId: RefBookId, companyId?: string) => async (dispatch: any) => {

  switch (refBookId) {
    case RefBookId.ROLES: return dispatch(addRole());
    // case 'users'  : return dispatch(addRefUser());

    default: return console.log(`addNewElement - выбрали не существующий RefBookId`);
  }
};


// Удаляем элемент из Справочника
export const deleteElement = (refBookId: RefBookId, id: string, email?: string) => async (dispatch: any) => {

  switch (refBookId) {
    // case RefBookId.ROLES                : return dispatch(deleteRole(id));
    // case RefBookId.USERS                : return dispatch(deleteRefUser({ userId: id, email }));
    
    default: return console.log(`deleteElement - выбрали не существующий RefBookId`);
  }
};

