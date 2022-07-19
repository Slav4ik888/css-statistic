import { RefbookId } from '../../../../../types';


export const getEditCardTitle = (refbookId: RefbookId): string => {
  let str = `Редактирование`;

  switch (refbookId) {
    case RefbookId.USERS: return str += ` пользователя`;
    case RefbookId.ROLES: return str += ` роли`;

    default:
      console.log(`[getEditCardTitle]: неизвестный RefbookId:`, refbookId);
      return ``;
  }
};
