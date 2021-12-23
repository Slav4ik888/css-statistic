import { CalcDBsType, DbItem } from '../../../../types';


// Возвращает итоговую сумму баллов для ТД
const calcResultTD = (arr: Array<DbItem>) => {
  let result = 0;
  if (arr) {
    arr.forEach(obj => result += +obj.ballsTD);
  };

  return result
};



export default function (filtred: CalcDBsType) {
  // Считаем баллы ТД и выводим в таблицее
  return [
    {
      label : `Да-Телеком`,
      total : calcResultTD(filtred.cssDb.datesEnd),
    }, {
      label : `Badcom`,
      total : calcResultTD(filtred.badcomDb.datesEnd)
    }
  ]
}