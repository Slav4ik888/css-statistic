import { showDate } from "../../../utils/dates/dates";

const oneSec  = 1000;
const oneMin  = oneSec  * 60;
const oneHour = oneMin  * 60;
const oneDay  = oneHour * 24;
  

interface L {
  lastFrom : string,
  lastTo   : string
}


/**
 * Возвращает последний день прошлой недели (по отношению к currentDay)
 * @param {Date} currentDate - текущий день
 * @param {number} endWeekDay - номер конца день недели 
 */
export function getLastEndWeekDate(currentDate: Date, endWeekDay: number): string {
  // Calculate how many days have passed in relation to the "currentDate"
  const day = currentDate.getDay();

  let howManyDays = 0;
  if (day > endWeekDay) howManyDays = day - endWeekDay;
  if (day < endWeekDay) howManyDays = 7 - endWeekDay + day;

  const resultNumber = currentDate.getTime() - (howManyDays * oneDay);
  return showDate(resultNumber, `YYYY-MM-DD`); // `2021-12-22`
}



/**
 * Возвращает начальную дату прошлой недели
 * @param lastTo 
 */
export function getLastStartWeekDate(lastTo: string) {
  const lastToMs = new Date(lastTo).getTime();
  return showDate(lastToMs - 6 * oneDay, `YYYY-MM-DD`);
}


/**
 * Возвращает даты начало и конца последней завершившейся недели
 * @param endWeekDay 
 * @returns { lastFrom, lastTo }
 */
export function getLastWeekDates(endWeekDay: number) {
  const currentDate = new Date();

  const lastTo   = getLastEndWeekDate(currentDate, endWeekDay); // `2021-12-22`;
  const lastFrom = getLastStartWeekDate(lastTo); // `2021-12-16`;

  return { lastFrom, lastTo }
}


export default function getLastWeekDatesForCss() {
  const endWeekDay = 3;
  return getLastWeekDates(endWeekDay);
}


export function getLastDateFrom(from: boolean) {
  const { lastFrom, lastTo } = getLastWeekDatesForCss();
  return from ? lastFrom : lastTo;
}
