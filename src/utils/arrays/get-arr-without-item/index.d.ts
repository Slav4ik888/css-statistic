/**
 * Возвращает массив без указанного элемента
 *  => if field === undefined & value length === 1, use field = field of value, else return items
 */
export function getArrWithoutItem<S>   (items: Array<S>, value: Partial<S> | string, field?: string): Array<S>;
