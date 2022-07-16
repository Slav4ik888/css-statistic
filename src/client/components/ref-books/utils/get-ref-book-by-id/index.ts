import { getItemById } from '../../../../../utils/arrays';
import { RefbooksList } from '../../../../consts/reference-books-list';

/**
 * Возвращает целиком объект Refbook
 */
export const getRefbookById = (id: string) => {
  return getItemById(RefbooksList, id);
};
