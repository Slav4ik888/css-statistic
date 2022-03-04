import { ItemBase, RoleType } from "..";

export enum CardType {
  ADD  = `Добавление`,
  EDIT = `Редактирование`
};

export interface RoleUser {
  type   : RoleType; // Тип пользователя
  roleId : string;   // Id назначенной роли
};


// Персональные данные
export interface Person {
  firstName   : string;    // Имя
  secondName? : string;    // Фамилия
  middleName? : string;    // Отчество
};


// !!! Dublicate for Server
export interface User extends ItemBase {
  active   : boolean;  // Активный или деактивирован (удалён/уволен)
  email    : string;
  person   : Person;   // ФИО
  role     : RoleUser; // Утверждённые Роли пользователя
};

export type Users = Array<User>;
