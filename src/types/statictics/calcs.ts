import { DbItem } from "..";

export type IndividualData = Array<IndividualStripItem>;

export interface IndividualStripItem {
  person        : string;
  countsCss     : number;
  scoresCss     : number;
  countsInstCss : number;
  scoresInstCss : number;
  scoresExpCss  : number;
  countsBadcom  : number;
  scoresBadcom  : number;
  total         : number;
};


export interface CalcDbItem {
  datesReg : Array<DbItem>;
  datesEnd : Array<DbItem>;
};


export interface CalcDBsType {
  cssDb     : CalcDbItem;
  cssInstDb : CalcDbItem;
  cssExpDb  : CalcDbItem;
  badcomDb  : CalcDbItem;
};