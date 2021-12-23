import { DbItem, IncidentStripItem } from "../../../../types";


/**
 * Возвращает кол-во совпадений по заданому
 */
export const calcNumberOf = (arr: Array<DbItem>, field: string, person: string) => {
  let result = 0;

  arr?.forEach(obj => {
    if (obj[field] === person) result++;
  });

  return result;
};


/**
 * Возвращает сумму баллов по сотруднику за указанные Param
 */
export const calcValueOf = (arr: Array<DbItem>, field: string, person: string) => {
  let result = 0;

  arr?.forEach(obj => {
    if (obj[field] === person) result += +obj.balls;
  });

  return result
};


/**
 * Возвращает итоговую сумму баллов по сотруднику
 * @param obj - объект сотрудника который посчитать
 */
export const calcResultBalls = (obj: IncidentStripItem) => {
  return obj.countsCss     * 15 +
         obj.scoresCss     +
         obj.countsInstCss * 15 +
         obj.scoresInstCss +
         obj.scoresExpCss  +
         obj.countsBadcom  * 15 +
         obj.scoresBadcom;
};