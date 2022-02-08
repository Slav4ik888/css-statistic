import { withZero } from '../../index.js';


export const getYYYYMMDDt = (date) => {
  const day   = withZero(date.getDate());
  const month = withZero(date.getMonth() + 1);
  const year  = date.getFullYear();
  
  return `${year}-${month}-${day}` // `YYYY-MM-DD`
};
