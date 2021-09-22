// Возвращаем массив ДО указанной даты
export const filtredBeforDate = (db, date) => {
  
  // Перевести в timestamp 
  const dateTs = Date.parse(date) - 28800000; // - 86400000;
  const result = db.filter(obj => obj.dateReg < dateTs);

  return result;
};


// Возвращаем отфильтрованный массив по промежутку дат регистрации инцидентов
export const filtredBetweenDatesReg = (db, a, b) => {
  
  // Перевести a b в timestamp 
  const startTS = Date.parse(a) - 28800 * 1000;
  const endTS = Date.parse(b) + 57599 * 1000;
  
  const result = db.filter((obj, i) => obj.dateReg >= startTS && obj.dateReg <= endTS);

  return result;
};


// Возвращаем отфильтрованный массив по промежутку дат регистрации инцидентов
export const filtredBetweenDatesEnd = (db, a, b) => {
  
  // Перевести a b в timestamp 
  const startTS = Date.parse(a) - 28800000;
  const endTS = Date.parse(b) + 57599000;
  
  const result = db.filter((obj, i) => obj.dateEnd >= startTS && obj.dateEnd <= endTS);

  return result;
};