// Calculation
import calcIncInWork from './calc-inc-in-work.js';
import { filtredBeforDate } from '../../../filters.js';
import calcInstallations from './calc-installations/calc-installations.js';
// Data
import { DB, COUNT } from '../../../db.js';
import costRenderedServices from './cost-rendered-services.js';
// Display
import logger from '../../../display/logger/logger.js';
const log = logger(`calcRPO`);





const getCostRenderedServices = (dateStart, dateEnd) => {
  const crs = Object.assign({}, costRenderedServices);

  // Подсчёт инсталляций
  calcInstallations(DB, crs);

  // Подсчёт итоговой суммы
  // calcTotal(crs)

  return crs;
};



export default function (dateStart, dateEnd) {
  // Кол-во завершённых инцидентов всего
  COUNT.incEnd = DB.CssDB.calc.datesEnd.length + DB.BadcomDB.calc.datesEnd.length;

  // Кол-во инсталляций
  COUNT.inst = DB.CssInstDB.calc.datesEnd.length;

  // Кол-во инцидентов находящихся в работе (отриц.) -1 день (Горбунов)
  const incCSS = filtredBeforDate(DB.CssDB.db, dateEnd);
  const incBC  = filtredBeforDate(DB.BadcomDB.db, dateEnd);
  COUNT.incInWork = calcIncInWork(incCSS, incBC);

  // Стоимость оказанных услуг
  COUNT.costRenderedServices = getCostRenderedServices(dateStart, dateEnd);
  log('COUNT.costRenderedServices: ', COUNT.costRenderedServices);
}