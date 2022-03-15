export enum TableType {
  ROLES = `roles`,
  USERS = `users`
};

export interface Table_HeaderCell {
  label  : string;
  styles : object;
};

export interface Table_Header {
  styles : object,
  cells  : Array<Table_HeaderCell>
};

export interface Table_Row {
  styles : object;
};

export interface Table_Body {
  styles : object;
};

export interface Table_Main {
  styles : object;
};

export interface Table {
  table  : Table_Main;
  header : Table_Header;
  body   : Table_Body;
  row    : Table_Row;
};
