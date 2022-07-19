const empty = {
  thousand: 0,
  rest: 0
};

/**
 * Возвращает целые тысячи и остаток по отдельности
 * @param {*} value 
 * @returns { thousand, rest }
 */
export const getThousandAndRest = (_value) => {
  if (!_value) return empty;

  const value = parseFloat(_value);
  if (!value || typeof value !== number) return empty;

  const thousand = Math.floor(value / 1000);
  const rest = ((value - thousand * 1000) + "00").slice(0, 3);

  return { thousand, rest };
};