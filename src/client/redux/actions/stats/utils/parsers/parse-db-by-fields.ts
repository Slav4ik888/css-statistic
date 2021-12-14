import { DbItem, DB_Name } from '../../../../../../types';
import getFieldsWithIds from './get-fields-with-idx';


// Сохраняем названия полей как key, а index присваиваем как значение
const getIndexes = (arr: Array<any>) => {
  let indexes = {};

  arr.forEach(item => indexes[item] = arr.findIndex(it => it === item));
  return indexes;
};



// Создаём массив из массива Гугла с объектами нужного формата но 0 значениями
export const parseDbByFields = (data: Array<any>, nameDB: DB_Name): Array<DbItem> => {

  const indexes = getIndexes(data[0]); // Находим и сохраняем индексы имеющихся полей
  const ids     = getFieldsWithIds(nameDB, indexes); // Только нужные поля из data с указанными индексами

  let parsedDB = [];
  let obj = {};
  
  for (let item of data) {
    for (let key in ids) {
      if (Object.prototype.hasOwnProperty.call(ids, key)) {

        if (key === `dateReg` || key === `dateEnd`)
          obj[key] = Date.parse(item[ids[key]]); // obj.dateReg = Date.parse(item[ids.dateReg]);
        else
          obj[key] = item[ids[key]];
      }
    }

    // Если входит в выбранный промежуток, то добавляем в базу
    parsedDB.push(obj);
    obj = {};
  }

  return parsedDB.slice(2) // Без 2 верхние строки заголовков
};