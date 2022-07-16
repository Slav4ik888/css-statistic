import { getRefbookById } from '../get-ref-book-by-id';

export const getConfirmTitleById = (id: string) => {
  return `Удалить ${getRefbookById(id).confirmTitle}`;
};
