import { getRefBookById } from '../get-ref-book-by-id';

export const getConfirmTitleById = (id: string) => {
  return `Удалить ${getRefBookById(id).confirmTitle}`;
};
