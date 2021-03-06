// Возвращает массив уникальных имён пользователей
export const createPersonNames = db => {
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


export const delDublePersons = arr => {
  return [...new Set(arr)];
};
