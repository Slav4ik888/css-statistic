import { CalcDBsType, TotalTechnialData } from "../../../../../types";
import calcInstallations from "./calc-installations";
import calcIncidentsInWork from "./calc-incedents-in-work";
import calcIncidents from "./calc-incidents";


export default function calcTotalTechnicalData(filtred: CalcDBsType, dateEnd: string): TotalTechnialData {
  
  return [
    {
      label: `Кол-во завершённых инцидентов`,
      total: calcIncidents(filtred)
    }, {
      label: `Кол-во завершённых инсталляций`,
      total: calcInstallations(filtred)
    }, {
      label: `Кол-во инцидентов в работе (отриц. и -1 день)`,
      total: calcIncidentsInWork(filtred, dateEnd)
    }
  ]
}