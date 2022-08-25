import { CalcDBsType, CalcDbItem } from "../../../../../types";


const addPersonNames = (names: Set<string>, db: CalcDbItem, field: string) => {
  if (db[field]?.length) {
    for (let obj of db[field]) {
      if (obj?.personEnd) names.add(obj.personEnd)
      if (obj?.personReg) names.add(obj.personReg)
    }
  }
  else console.log(`Массив пустой`);
};



// Возвращает массив уникальных имён пользователей
const createPersonNames = (db: CalcDbItem) => {
  let names = new Set<string>();
  
  addPersonNames(names, db, `datesReg`);
  addPersonNames(names, db, `datesEnd`);

  return [...names];
};



// Возвращает массив уникальных Person
export const getPersons = (DBs: CalcDBsType) => {
  let persons = [];

  for (let key in DBs) {
    if (Object.prototype.hasOwnProperty.call(DBs, key)) {
      persons = [...persons, ...createPersonNames(DBs[key])];
    }
  }

  return [...new Set(persons)];
};
