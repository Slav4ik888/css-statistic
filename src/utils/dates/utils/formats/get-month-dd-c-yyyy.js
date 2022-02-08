import { getMonth, withZero } from '../../index.js';


export const getMonthDDсYYYY = (date, sub) => {
  const day   = withZero(date.getDate());
  const month = getMonth(date, sub);
  const year  = date.getFullYear();
  
  return `${month} ${day} ${year}` // `Month DD, YYYY`
};
