import { RuleType, CredType } from ".";


export interface PermSchemeItem extends Array<boolean | RuleType | string> {
  0: boolean;            // Visible
  1: CredType | boolean; // Default value
  2: string;             // Label
};


export interface PermissionsScheme {
  read   : PermSchemeItem;
  add    : PermSchemeItem;
  change : PermSchemeItem;
  del    : PermSchemeItem;
};


export enum CredSchemeItemType {
  SECTION = `section`,
  FIRST   = `first`,   // 1 level
  SECOND  = `second`   // 2 level
};

export interface CredSchemeItemBase {
  id    : string;  
  type  : CredSchemeItemType;
  label : string;
};


type AddiItem = {
  rule: PermSchemeItem;
};


export type UnicItem = CredSchemeItemBase & AddiItem;


export interface CredSchemeItem extends CredSchemeItemBase {
  permissions : PermissionsScheme;
  unics       : Array<UnicItem>;
  additionals : Array<CredSchemeItem>;
};
