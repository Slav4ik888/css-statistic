import { getArrWithoutItem } from '../get-arr-without-item/index.js';


export const getArrWithoutItemById = (items, value) => {
  if (typeof value !== `string` && typeof value !== `number`) return items;

  return getArrWithoutItem(items, { id: value })
};
