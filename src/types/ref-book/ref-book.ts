import { RefBookId } from ".";

// Типы справочников
export enum RefBookType {
  ROLES      = `Роли`,
  USERS      = `Сотрудники`,
};

// Справочник
export interface RefBookItem {
  type          : RefBookType;
  id            : RefBookId;
  label         : string;
  toolLabel     : string;
  cardTitle     : string;
  confirmTitle? : string;
  iconName?     : string;
  disabled?     : boolean;
};

export type RefBookItems = Array<RefBookItem>;
