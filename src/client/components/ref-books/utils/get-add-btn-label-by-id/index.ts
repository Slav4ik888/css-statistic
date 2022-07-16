import { RefbookId } from "../../../../../types";

export const getAddBtnLabelById = (refbookId: RefbookId) => {
  switch (refbookId) {
    case RefbookId.USERS: return `нового пользователя`;
    case RefbookId.ROLES: return `новую роль`;
  }
}
