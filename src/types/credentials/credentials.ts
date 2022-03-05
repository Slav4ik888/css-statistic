import { CredType } from ".";


export interface Permissions {
  r: CredType;
  a: CredType;
  c: CredType;
  d: CredType;
};


export interface CredItem {
  i  : string;          // Id
  l  : string;          // Label
  p? : Permissions;     // Main permissions
  u? : object;          // Unical permissions { adminSet: [false, `Назначать "Администратором"`] }
  
  a? : Array<CredItem>; // Additional - дополнительные
};

export interface Credential {
  scheme : string; // 'creds.roles.c'
  label  : string; // 'Изменять существующие настройки прав "Ролей"'
};
