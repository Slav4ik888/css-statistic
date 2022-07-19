import { RefbookId } from "../../../../../types";
import { getRefbook } from "../get-ref-book";


/**
 * Возвращает Label от объекта RefBook по id
 */
export const getRefbookLabel = (id: RefbookId): string => {
  if (!id) return ``;
  return getRefbook(id)?.label;
};
