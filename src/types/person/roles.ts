import { ItemBase } from "..";


// !!! Dublicate for Server
export enum RoleType {
  SUPER = `Разработчик`,
  ADMIN = `Администратор`,
  USER  = `Пользователь`
};


// One Role from roles array
export interface RoleLabel {
  id    : string,
  order : number,
  label : string
};


export interface Role extends ItemBase {
  role  : string; // Название Роли
  creds : object; // Установленные полномочия Роли
};

export type Roles = Array<Role>;