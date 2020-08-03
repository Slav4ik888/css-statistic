import {resultObjTemplate} from './result-obj-template.js';

// 50. Создаём массив по кол-ву Person, для наполнения
export const createResultArr = (arr) => {
  const ResultArr = [];
  let obj = {};
  let objIndex = {}; // Индексы объекта сотрудника в итоговом массиве, чтобы потом долго не искать

  arr.forEach((item, i) => {
    obj = Object.assign({}, resultObjTemplate);
    obj.fioPerson = item;
    objIndex[item] = i;
    ResultArr.push(obj);
  });

  return {ResultArr, objIndex};
};
