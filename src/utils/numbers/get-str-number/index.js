import { isDotComma, getDigit, commaToDot, dotToComma } from '../replacers/index.js';
import { addSpaceBetweenNumber } from '../add-space-between-number/index.js';

/**
 * Для handleChange(e)
 * Возвращает число в строке с разделёнными тысячами
 */
export default function getStrNumber(value) {
  const valInStr = value.toString();
  let str = ``;

  for (let i = 0; i < valInStr.length; i++) {
    if (isDotComma(valInStr[i])) {
      if (!isDotComma(str)) str += valInStr[i] // Comma or Dota must be one
    }
    else str += getDigit(valInStr[i]);
  }

  str = addSpaceBetweenNumber(commaToDot(str));
  str = dotToComma(str);

  return str;
};