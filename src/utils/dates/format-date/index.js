import {
  getMonth, getMonthYYYY, getMonthDDсYYYY, getDDMonthYYYY, getDMonthYYYY, getDMonthYYYYHHMM, getYYYYMMDDt, getYYYYMMDD, getDDMMYYYYt, getDDMMYYYYd, getHHMM,
  FORMAT, SUB
} from '../utils/index.js';


// Validate
const isNoCorrect = (ms) => !ms || ms < 0 || typeof ms !== `number`;


/**
 * Возвращаем дату от time в нужном формате
 * 
 * @param {number | string | Date} ms - таймстамп
 * @param {string} format - формат, в котором нужно вернуть ms
 * @param {SUB} sub - если нужно в на русском или нужно склонение `Февраля`
 * @return {string} - дата в нужном формате
 */
export default function formatDate(_ms, format, sub = SUB.EN) {
  let date;
  
  if (Date.parse(_ms)) date = new Date(_ms)
  else {
    const ms = parseInt(_ms);
    if (isNoCorrect(ms)) return `Указана некорректная дата`;
    date = new Date(ms);
  }
    

  switch (format) {
    case FORMAT.Month:          return getMonth          (date, sub);
    case FORMAT.MonthYYYY:      return getMonthYYYY      (date, sub);
    case FORMAT.MonthDDсYYYY:   return getMonthDDсYYYY   (date, sub);
    case FORMAT.DDMonthYYYY:    return getDDMonthYYYY    (date, sub);
    case FORMAT.DMonthYYYY:     return getDMonthYYYY     (date, sub);
    case FORMAT.DMonthYYYYHHMM: return getDMonthYYYYHHMM (date, sub);
    case FORMAT.YYYYMMDDt:      return getYYYYMMDDt      (date);
    case FORMAT.YYYYMMDD:       return getYYYYMMDD       (date);
    case FORMAT.DDMMYYYYt:      return getDDMMYYYYt      (date);
    case FORMAT.DDMMYYYYd:      return getDDMMYYYYd      (date);
    case FORMAT.HHMM:           return getHHMM           (date);

    default:
      return date;
  }
};