// Base item for save to DB


// Тип для фиксирования даты
export interface FixDate {
  userId : string; // Кто создал или сделал изменение
  date   : string; // Дата события
};


// For: ORDER, COMPANY, ADDRESS, CONTACT
export interface ItemBase {
  id           : string; // Id
  description? : string; // Описание

  // Сортировка среди своих же братьев
  // При перемещении к новому родителю, ставиться в начало списка
  order?       : number;
  
  createdAt?   : FixDate;
  lastChange?  : FixDate;
};