// Возвращаем отфильтрованный массив по промежутку дат регистрации инцидентов
export const filtredBetweenDatesReg = (db, a, b) => {
  
  // console.log('a: ', a);
  // console.log('b: ', b);
  // console.log('db: ', db);

  // Перевести a b в timestamp 
  const startTS = Date.parse(a) - 28800000;
  const endTS = Date.parse(b) + 57599000;
  const start = new Date(startTS);
  const end = new Date(endTS);
  
  
  // console.log('start: ', start);
  // console.log('end: ', end);
  // console.log('startTS: ', startTS);
  // console.log('endTS: ', endTS);
  
  const result = db.filter((obj, i) => obj.dateReg >= startTS && obj.dateReg <= endTS);
  console.log('Зарегистрированы: ', result);

  return result;
};

// Возвращаем отфильтрованный массив по промежутку дат регистрации инцидентов
export const filtredBetweenDatesEnd = (db, a, b) => {
  
  // console.log('a: ', a);
  // console.log('b: ', b);
  // console.log('db: ', db);

  // Перевести a b в timestamp 
  const startTS = Date.parse(a) - 28800000;
  const endTS = Date.parse(b) + 57599000;
  const start = new Date(startTS);
  const end = new Date(endTS);
  
  
  // console.log('start: ', start);
  // console.log('end: ', end);
  // console.log('startTS: ', startTS);
  // console.log('endTS: ', endTS);
  
  const result = db.filter((obj, i) => obj.dateEnd >= startTS && obj.dateEnd <= endTS);
  console.log('Завершены: ', result);

  return result;
};