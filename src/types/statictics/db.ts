
export interface DbItem {
  dateReg     : number;
  dateEnd     : number;
  personReg   : string;
  personEnd   : string;
  status      : string;
  ballsTD     : number;
  balls       : number;
  typeClient  : string;
  typeInstall : string;
  range       : string;
};


export interface DBsType {
  cssDb     : Array<DbItem>;
  cssInstDb : Array<DbItem>;
  cssExpDb  : Array<DbItem>;
  badcomDb  : Array<DbItem>;
};