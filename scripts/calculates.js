/**
 * Возвращает кол-во совпадений по заданому
 * @param {Array} arr - массив в котором искать
 * @param {string} param - по какому элементу искать
 * @param {string} person - имя
 *
 * @return {number}
 */

export const calculateNumberOf = (arr, param, person) => {
  let result = 0;
  if (arr) {
    arr.forEach(obj => {
      if (obj[param] === person) {
        console.log(obj[param]);

        result++;
      }
    });
  };
  return result;
};


/**
 * Возвращает сумму баллов по сотруднику
 * @param {Array} arr - массив в котором искать
 * @param {string} param - по какому элементу искать
 * @param {string} person - имя
 *
 * @return {number}
 */

export const calculateValueOf = (arr, param, person) => {
  let result = 0;
  result = arr.reduce((sum, obj) => obj[param] === person ? sum + obj.balls : null, 0);
  
  console.log('result balls: ', result);
  if (result) {
    return result
  }
  
  return 0;
};
