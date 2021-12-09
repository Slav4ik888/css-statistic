
export const isDotComma = (str) => /[,.]/g.test(str);
export const isDot      = (str) => /\./g  .test(str);
export const isComma    = (str) => /,/g   .test(str);
export const commaToDot = (str) => str.replace(/\,/g, `.`);
export const dotToComma = (str) => str.replace(/\./g, `,`);
export const delSpace   = (str) => str.replace(/\s/g, ``);
export const getDigit   = (str) => str.replace(/\D/g, ``);