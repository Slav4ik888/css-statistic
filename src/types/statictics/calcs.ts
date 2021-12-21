import { DbItem } from "..";


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


// -------------     INDIVIDUAL    ----------------- //


export type IndividualData = Array<IndividualStripItem>;

export interface IndividualStripItem {
  label         : string;
  countsCss     : number;
  scoresCss     : number;
  countsInstCss : number;
  scoresInstCss : number;
  scoresExpCss  : number;
  countsBadcom  : number;
  scoresBadcom  : number;
  total         : number;
};

// ------------   HEAD OF TECHNICAL   --------------- //

export type TotalTechnialData = Array<TotalTechnicalStripItem>;

export interface TotalTechnicalStripItem {
  label : string;
  total : number;
};

export interface ServiceItem {
  label : string;
  cost  : number; // Стоимость
  count : number; // Кол-во
  total : number; // Итоговая стоимость
};


// Amount of services rendered
export type RenderedServices = Array<ServiceItem>;

export interface HeadOfTechnical {
  totalTechnical   : TotalTechnialData;
  renderedServices : RenderedServices;
};


// -------------   TECH DIRECTOR   ----------------- //

export type TechDirector = Array<TechDirectorItem>;

export interface TechDirectorItem {
  label : string;
  total : number;
};


// -----------------    RESULT   -------------------- //

export interface CalcResults {
  individual      : IndividualData;
  headOfTechnical : HeadOfTechnical;
  techDirector    : TechDirector;
};