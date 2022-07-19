import { RefbookId, CardType } from '../../../../../types';
import { getAddCardTitle } from '../get-add-card-title';
import { getEditCardTitle } from '../get-edit-card-title';
import { getRefbook } from '../get-ref-book';



export const getCardTitle = (type: CardType, id: RefbookId) => {
  switch (type) {
    case CardType.ADD  : return getAddCardTitle(id);
    case CardType.EDIT : return getEditCardTitle(id);
    case CardType.DEL  : return `Удалить ${getRefbook(id).confirmTitle}`;

    default:
      console.log(`[getCardTitle]: неизвестный CardType:`, type);
      return ``;
  }
};
