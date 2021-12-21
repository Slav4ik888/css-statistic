import { DbItem, IncidentStatus } from "../../../types";

// Возвращает Кол-во инцидентов находящихся в работе 
export default function getIncInWork(arrCSS: Array<DbItem>, arrBC: Array<DbItem>) {
  let result = 0;

  if (arrCSS?.length) {
    arrCSS.forEach(obj => {
      if (obj.status === IncidentStatus.IN_WORK) result++;
    });
  };

  if (arrBC?.length) {
    arrBC.forEach(obj => {
      if (obj.status === IncidentStatus.IN_WORK) result++;
    });
  };

  return result;
};