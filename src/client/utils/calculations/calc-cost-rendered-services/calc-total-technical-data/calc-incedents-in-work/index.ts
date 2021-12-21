import { CalcDBsType } from "../../../../../../types";
import { filtredBeforeDate } from "../../../filters/filters";
import getIncInWork from "../../../get-inc-in-work";


/**
 * Кол-во инцидентов находящихся в работе (отриц.) -1 день (Горбунов)
 **/
export default function calcIncidentsInWork(filtred: CalcDBsType, dateEnd: string) {
  const incCSS = filtredBeforeDate(filtred.cssDb.datesReg, dateEnd);
  const incBC  = filtredBeforeDate(filtred.badcomDb.datesReg, dateEnd);

  return getIncInWork(incCSS, incBC)
}