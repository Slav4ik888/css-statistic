/**
 * Возвращает item by two values
 */
export function getItemFromArrByTwoField<T, FF, FS>(
  arr: Array<T>,
  fieldFirst: string,  valueFirst: FF,
  fieldSecond: string, valueSecond: FS,
): T;
