import { getMonth } from './index.js';


export const getMonthYYYY = (date, sub) => {
  const month = getMonth(date, sub);
  const year  = date.getFullYear();
  
  return `${month} ${year}` // `Month YYYY`
};
