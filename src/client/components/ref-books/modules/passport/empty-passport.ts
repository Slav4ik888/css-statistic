import { Passport } from "../../../../../types";

// Для тех Водителей которых внесли без этого блока с паспортными данными
export const emptyPassport: Passport = {
  series: ``,
  number: ``,
  goverment: ``,
  date: ``,
  kod: ``
};