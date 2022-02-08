import { getMonth } from '../../index.js';


export const getDMonthYYYY = (date, sub) => {
  const day   = date.getDate();
  const month = getMonth(date, sub);
  const year  = date.getFullYear();
  
  return `${day} ${month} ${year}` // `D Month YYYY`
};
