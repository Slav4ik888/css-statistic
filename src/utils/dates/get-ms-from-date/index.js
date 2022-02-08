/**
 * Возвращает дату в виде миллисекунд
 * @param {String} date дата
 */
export default function getMsFromDate(date) {
  if (!date) return 0;
  
  return new Date(date).getTime();
}