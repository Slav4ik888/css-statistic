
export enum DateItemType {
  FROM = `from`,
  TO   = `to`
};

// Выбранные даты
export interface SelectedDates {
  from : string,
  to   : string,
};


// имена для массивов DB для localStorage и прочего
export enum DB_Name {
  CssDB     = `Stat-CssDB`,
  CssInstDB = `Stat-CssInstDB`,
  CssExpDB  = `Stat-CssExpDB`,
  BadcomDB  = `Stat-BadcomDB`
};