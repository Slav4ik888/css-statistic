import { getItemFromArrByField } from '../../../../../utils/arrays/get-item-from-arr-by-field/get-item-from-arr-by-field';
import { ReferenceBooksList } from '../../../../consts/reference-books-list';

// Возвращает целиком объект RefBook
export const getRefBookById = (id: string) => {
  return getItemFromArrByField(ReferenceBooksList, `id`, id);
};
