import { getMonth, withZero } from '../../index.js';


export const getDDMonthYYYY = (date, sub) => {
  const day   = withZero(date.getDate());
  const month = getMonth(date, sub);
  const year  = date.getFullYear();
  
  return `${day} ${month} ${year}` // `DD Month YYYY`
};
