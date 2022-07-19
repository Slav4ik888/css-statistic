import { RefbookId } from '../../../../../types';


export const getAddCardTitle = (refbookId: RefbookId): string => {
  switch (refbookId) {
    case RefbookId.USERS: return `Добавление нового пользователя`;
    case RefbookId.ROLES: return `Добавление новой роли`;

    default:
      console.log(`[getAddCardTitle]: неизвестный RefbookId:`, refbookId);
      return ``;
  }
};
