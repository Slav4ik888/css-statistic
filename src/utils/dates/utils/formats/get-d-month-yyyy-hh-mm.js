import { getMonth, withZero } from '../../index.js';


export const getDMonthYYYYHHMM = (date, sub) => {
  const day   = date.getDate();
  const month = getMonth(date, sub);
  const year  = date.getFullYear();
  const hours = withZero(date.getHours());
  const mins  = withZero(date.getMinutes());
  
  return `${day} ${month} ${year} ${hours}:${mins}` // `D Month YYYY HH:MM`
};
