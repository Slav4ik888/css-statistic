import { getRefBookById } from "../get-ref-book-by-id";


// Возвращает Label от объекта RefBook по id
export const getLabelById = (id: string) => {
  if (!id) return ``;
  return getRefBookById(id)?.label;
};
