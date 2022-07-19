import { commaToDot, delSpace } from '../replacers/index.js';


export function toNumber(str) {
  if (typeof str !== `string`) return 0;
  if (!str) return 0;

  const dot = commaToDot(str);
  const spa = delSpace(dot);
  const num = parseFloat(spa);
  
  if (!num) return 0;
  return num;
};