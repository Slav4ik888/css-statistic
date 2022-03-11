import { RefBookId } from '../../../../../types';
import { getRefBookById } from '../get-ref-book-by-id';

export const getCardTitleById = (refBookId: RefBookId) => {
  switch (refBookId) {
    case RefBookId.CARRIERS             : return `Карточка компании перевозчика`;
    case RefBookId.PAYER                : return `Карточка компании плательщика`;
    case RefBookId.ADDRESSES_IN_COMPANY : return `Карточка адреса`;
    case RefBookId.CONTACTS_IN_COMPANY  : return `Карточка контакта`;

    default: return `Карточка ${getRefBookById(refBookId).cardTitle}`;
  }
};
