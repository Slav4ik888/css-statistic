import { withZero } from '../../index.js';


export const getDDMMYYYYd = (date) => {
  const day   = withZero(date.getDate());
  const month = withZero(date.getMonth() + 1);
  const year  = date.getFullYear();
  
  return `${day}.${month}.${year}` // `DD.MM.YYYY`
};
