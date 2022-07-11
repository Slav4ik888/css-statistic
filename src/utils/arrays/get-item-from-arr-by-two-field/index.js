/**
 * Возвращает item by two values
 */
export const getItemFromArrByTwoField = (arr, fieldFirst, valueFirst, fieldSecond, valueSecond) => {
  if (!fieldFirst || !fieldSecond) return undefined;

  return arr?.find((item) => item?.[fieldFirst] === valueFirst
    && item?.[fieldSecond] === valueSecond);
};