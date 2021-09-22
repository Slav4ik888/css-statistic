import { DB, COUNT } from '../../db.js';

// Возвращает итоговую сумму баллов для ТД
const calcResultTD = arr => {
  let result = 0;
  if (arr) {
    arr.forEach(obj => result += +obj.ballsTD);
  };

  return result
};



export default function () {
  // Считаем баллы ТД и выводим в таблицее
  COUNT.tdD = calcResultTD(DB.CssDB.calc.datesEnd);
  COUNT.tdB = calcResultTD(DB.BadcomDB.calc.datesEnd);
}