import { RefbookId } from '../../../../../types';
import { getItemById } from '../../../../../utils/arrays';
import { RefbooksList } from '../../../../consts/reference-books-list';


/**
 * Возвращает целиком объект Refbook
 */
export const getRefbook = (id: RefbookId) => {
  return getItemById(RefbooksList, id);
};
