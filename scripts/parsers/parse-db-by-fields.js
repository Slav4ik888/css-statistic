import getFieldsWithIds from './get-fields-with-idx.js';


// Сохраняем названия полей как key, а index присваиваем как значение
const getIndexes = (arr) => {
  let indexes = {};

  arr.forEach(item => indexes[item] = arr.findIndex(it => it === item));
  return indexes;
};



// Создаём массив из массива Гугла с объектами нужного формата но 0 значениями
export const parseDbByFields = (db, nameDB) => {
  // Находим и сохраняем индексы имеющихся полей
  const indexes = getIndexes(db[0]);

  // Только нужные поля из db с указанными индексами
  const ids = getFieldsWithIds(nameDB, indexes);

  let parsedDB = [];
  let obj = {};
  
  for (let item of db) {
    for (let key in ids) {
      if (Object.prototype.hasOwnProperty.call(ids, key)) {
        if (key === `dateReg` || key === `dateEnd`)
          obj[key] = Date.parse(item[ids[key]]); // obj.dateReg = Date.parse(item[ids.dateReg]);
        else
          obj[key] = item[ids[key]];
      }
    }
    parsedDB.push(obj);
    obj = {};
  }

  parsedDB.splice(0, 2); // Удаляем 2 верхние строки заголовков
  // console.log(`${nameDB}`, parsedDB);

  return parsedDB;
};