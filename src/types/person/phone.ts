
export enum PhoneType {
  MOBILE = `Мобильный`,
  WORK   = `Рабочий`,
  HOME   = `Домашний`
};


export interface Phone {
  id          : number;    // Id телефона
  type        : PhoneType; // Тип номера
  number      : string;    // Телефонный номер
  extension   : string;    // Внутренний, добавочный номер
  description : string;    // Примечание
};

export type Phones = Array<Phone>;
