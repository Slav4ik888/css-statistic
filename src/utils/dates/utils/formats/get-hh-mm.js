import { withZero } from '../../index.js';


export const getHHMM = (date) => {
  const hours = withZero(date.getHours());
  const mins  = withZero(date.getMinutes());
  
  return `${hours}:${mins}` // `HH:MM`
};
