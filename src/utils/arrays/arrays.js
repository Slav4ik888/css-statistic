import { cloneObj } from '../objects/index.js';


/**
 * Возвращает массив созданный из списка (псевдомассива), с добавлением id в виде key от списка
 * @param {Object} list 
 * @returns {Array}
 */
export const getArrayFromList = list => {
  let arr = [];
  for (let key in list) {
    let obj = {};
    obj = cloneObj(list[key]);
    obj.id = key;
    arr.push(obj);
  }
  return arr;
};


/**
 * Возвращает список уникальных id из array, пример userId из tasks || companyId из usersProfiles
 * @param {Array} arr 
 * @param {String} field 
 * 
 * @return {Array}
 */
export const getItemsIdListFromArr = (arr, field) => {
  let itemsIdSet = new Set();
  arr.forEach(item => itemsIdSet.add(item[field]));

  let itemsIdList = [];
  for (let uid of itemsIdSet) itemsIdList.push(uid);

  return itemsIdList;
};
