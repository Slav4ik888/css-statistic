import { ReferenceBooksList } from '../../../../consts/reference-books-list';
import { getItemFromArrByField } from "../../../../../utils/arrays/get-item-from-arr-by-field";

// Возвращает целиком объект RefBook
export const getRefBookById = (id: string) => {
  return getItemFromArrByField(ReferenceBooksList, `id`, id);
};
