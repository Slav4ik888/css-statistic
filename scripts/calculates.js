/**
 * Возвращает кол-во совпадений по заданому
 * @param {Array} arr - массив в котором искать
 * @param {string} param - по какому элементу искать
 * @param {string} person - имя
 *
 * @return {number}
 */

export const calcNumberOf = (arr, param, person) => {
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
 * Возвращает сумму баллов по сотруднику за указанные Param
 * @param {Array} arr - массив в котором искать
 * @param {string} param - по какому элементу искать совпадения Person (имя сотрудника)
 * @param {string} person - имя
 *
 * @return {number}
 */

export const calcValueOf = (arr, param, person) => {
  // const result = arr.reduce((sum, obj) => obj[param] === person ? sum + +obj.balls : 0, 0);
  let result = 0;
  if (arr) {
    arr.forEach(obj => {
      if (obj[param] === person) {
        result += +obj.balls;
      }
    });
  };

  console.log(`result balls: ${person}`, result);
  if (result) {
    return result
  }
  
  return 0;
};

/**
 * Возвращает итоговую сумму баллов по сотруднику
 * @param {Object} o - объект сотрудника который посчитать
 * @param {string} param - по какому элементу искать совпадения Person (имя сотрудника)
 * @param {string} person - имя
 *
 * @return {number}
 */

export const calcResultBalls = o => {
  let result = 0;
  result =
    o.numberSupportReg * 15 +
    o.valueSupportForEnd +
    o.numberInstallReg * 15 +
    o.valueInstallForEnd +
    o.valueExperiencesForEnd +
    o.numberBadcomReg * 15 +
    o.valueBadcomForEnd;
  return result;
};

/**
 * Возвращает итоговую сумму баллов по сотруднику
 * @param {Array} arr - объект сотрудника который посчитать
 * @param {string} param - по какому элементу искать совпадения Person (имя сотрудника)
 * @param {string} person - имя
 *
 * @return {number}
 */

export const calcResultTD = arr => {
  let result = 0;
  if (arr) {
    arr.forEach(obj => result += +obj.ballsTD);
  };

  console.log(`result TD:`, result);
  if (result) {
    return result
  }
  
  return 0;
};
