/**
 * Возвращает максимально имещющееся значение
 * @param {Array} arr 
 * @param {string} field поле по которому проверка, значение должно быть number
 */
const getMaxValue = (arr, field) => {
  let maxValue = 0;
  
  arr.forEach(item => {
    if (item[field] > maxValue) maxValue = item[field];
  });
  return maxValue;
};


/**
 * Создаёт id следующий после максимального, если это первый элемент то 1
 * @param {Array} arr массив для которого создаём
 * @param {string} field поле хранящее значение <number>
 */
export const createNumberId = (arr, field) => {
  if (!arr) return undefined;

  const maxId = parseInt(getMaxValue(arr, field));
  return maxId + 1;
};


// For Phones & CarrierTransport
export const createId = (arr) => {
  return createNumberId(arr, `id`);
};