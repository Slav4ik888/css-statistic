/**
 * Возвращает массив с обновлённым item by id
 * 
 * Если нет массива items, то создаёт его
 * 
 * @param {array} items 
 * @param {object} updateItem 
 * @param {string | array} flags - если стоит `update`, то в обновляемом объекте, обновляются только 
 * те поля что переданы в updateItem, остальные имеющиеся остаются без изменений
 */
export function updateArrById<T>(
  items: Array<T>,
  updateItem: Partial<T>,
  flags?: string | Array<string>,
): Array<T>;
