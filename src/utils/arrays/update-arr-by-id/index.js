import { updateArrWithItemByField } from '../update-arr-with-item-by-field/index.js';

export const updateArrById = (arr, item, flags) => updateArrWithItemByField(arr, `id`, item, flags);
