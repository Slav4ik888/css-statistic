import { RefbookId } from ".";

// Типы справочников
export enum RefbookType {
  ROLES      = `Роли`,
  USERS      = `Сотрудники`,
};

// Справочник
export interface RefbookItem {
  type          : RefbookType;
  id            : RefbookId;
  label         : string;
  toolLabel     : string;
  cardTitle     : string;
  confirmTitle? : string;
  iconName?     : string;
  disabled?     : boolean;
};

export type RefbookItems = Array<RefbookItem>;
