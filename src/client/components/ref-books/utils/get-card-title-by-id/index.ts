import { RefBookId } from '../../../../../types';
import { getRefBookById } from '../get-ref-book-by-id';

export const getCardTitleById = (refBookId: RefBookId) => {
  switch (refBookId) {

    default: return `Карточка ${getRefBookById(refBookId).cardTitle}`;
  }
};
