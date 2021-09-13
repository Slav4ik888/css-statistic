// Возвращает массив уникальных имён пользователей
export const createPersonNames = (db) => {
  const names = [];
  
  let result = true;

  if (db.length) {
    for (let obj of db) {
      result = names.find(it => it === obj.personEnd)
      !result && obj.personEnd && names.push(obj.personEnd);

      result = names.find(it => it === obj.personInit)
      !result && obj.personInit && names.push(obj.personInit);
    }
  } else {
    console.log(`Массив пустой`);
  }

  return names;
};


// Удалим дубликаты имён
export const delDublePersons = (arr) => [...new Set(arr)];


export const getPersons = (DB) => {
  let persons = [];
  // Создаём массив уникальных Person
  for (let key in DB) {
    if (Object.prototype.hasOwnProperty.call(DB, key)) {
      persons = [...persons, ...createPersonNames(DB[key])];
    }
  }
  // Удалим дубликаты имён
  persons = delDublePersons(persons);

  return persons;
}