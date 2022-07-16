import { RefbookId } from '../../../../../types';
import { getRefbookById } from '../get-ref-book-by-id';

export const getCardTitleById = (refbookId: RefbookId) => {
  switch (refbookId) {

    default: return `Карточка ${getRefbookById(refbookId).cardTitle}`;
  }
};
