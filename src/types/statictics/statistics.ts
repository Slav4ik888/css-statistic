
export enum DateItemType {
  FROM = `from`,
  TO   = `to`
};

// Выбранные даты
export interface SelectedDates {
  from : string,
  to   : string,
}