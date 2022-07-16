export enum SearchType {
  ROLES     = "Роли",
  USERS     = "Пользователи",
  NO_SELECT = "Не выбран"
};

export interface SearchOptionType {
  id          : string;
  title       : string;
  inputValue? : string;
};

export type SearchOptionsTypes = Array<SearchOptionType>;
