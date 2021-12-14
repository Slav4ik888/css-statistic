import { DbItem } from ".";

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