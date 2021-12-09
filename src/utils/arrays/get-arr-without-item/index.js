/**
 * Возвращает массив без указанного элемента
 */
export default function getArrWithoutItem(items, value) {
  if (!items?.length) return [];
  
  return items.filter((item) => item !== value);
};