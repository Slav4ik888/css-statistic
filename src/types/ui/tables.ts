import { TextAlign } from "../../client/utils/styles";

export enum TableHeadType {
  PRIMARY  = `headPrimary`,
  SEONDARY = `headSecondary`
};


export interface FillingItem {
  id     : string;
  label  : string | number;
  order  : number;
  width  : number;
  align? : TextAlign;
  bold?  : boolean;
};

export type TableStrip = Array<FillingItem>;

export type TableBody = Array<{
  person : string;
  strip  : TableStrip;
}>;

export interface TableData {
  headPrimary   : TableStrip;
  headSecondary : TableStrip;
  body          : TableBody;
};