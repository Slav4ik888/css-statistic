import { WEEK_DAYS, WEEK_DAYS_RU, WEEK_DAYS_FULL } from './index.js';


/**
 * Возвращает день недель в нужном формате
 * @param {Number} timestamp - таймстамп
 * @param {String} format - формат, в котором нужно вернуть timestamp
 *
 * @return {String} - день недели в нужном формате
 */
export default function getWeekDay(timestamp, format) {
  const newDate = new Date(timestamp);

  const formatType = {
    smallEng: `smallEng`,
    smallRus: `smallRus`,
    largeRus: `largeRus`,
  };

  switch (format) {
    case formatType.smallEng:
      return WEEK_DAYS[newDate.getDay()];

    case formatType.smallRus:
      return WEEK_DAYS_RU[newDate.getDay()];

    case formatType.largeRus:
      return WEEK_DAYS_FULL[newDate.getDay()];

    default: return timestamp;
  }
}