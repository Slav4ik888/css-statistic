
/**
 * Возвращает ключ объекта по значению value
 */
export default function getKeyByValue<O extends object, S>(obj: O, value: S): string
  