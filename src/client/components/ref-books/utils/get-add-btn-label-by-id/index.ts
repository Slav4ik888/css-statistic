import { RefBookId } from "../../../../../types";

export const getAddBtnLabelById = (refBookId: RefBookId) => {
  switch (refBookId) {
    case RefBookId.USERS: return `нового пользователя`;
    case RefBookId.ROLES: return `новую роль`;
  }
}
