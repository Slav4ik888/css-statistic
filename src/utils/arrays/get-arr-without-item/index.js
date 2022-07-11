import { objectLength as length, getFirstFieldKey as getKey } from '../../objects/index.js';


export function getArrWithoutItem(items, value, field) {
  if (!items?.length) return [];
  if (!value) return items;

  if (typeof items[0] === `object`) {
    if (typeof value === `object`) {
      if (field) return items.filter(item => item[field] !== value[field]);
      else {
        if (length(value) === 1) {
          const fieldValue = getKey(value);
          if (fieldValue) return items.filter(item => item[fieldValue] !== value[fieldValue])
        }
      }
    }
    else return items.filter(item => item[field] !== value);
  }
  else {
    if (typeof value !== `object`) return items.filter(item => item !== value);
  }

  return items;
};
