import { DbItem, IncidentType } from "../../../../types";
import { hour, sec } from "../../../../utils/dates/base";


/** 
 * Возвращаем массив ДО указанной даты
 **/ 
export const filtredBeforeDate = (db: Array<DbItem>, _date: string) => {

  const date = Date.parse(_date) - hour(8); // Перевести в timestamp

  return db?.filter(obj => obj.dateReg < date);
};


/**
 * Возвращаем отфильтрованный массив по промежутку дат регистрации | завершения инцидентов
 **/ 
export const filtredBetweenDates = (
  db: Array<DbItem>, _start: string, _end: string, type: IncidentType
) => {
  
  // Перевести a b в timestamp 
  const start = Date.parse(_start) - hour(8);
  const end   = Date.parse(_end)   + hour(16) - sec(1);
  
  return db?.filter(obj => obj[type] >= start && obj[type] <= end);
};