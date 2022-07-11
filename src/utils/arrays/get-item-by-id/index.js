import { getItemFromArrByField } from '../get-item-from-arr-by-field/index.js';


export const getItemById = (arr, id) => getItemFromArrByField(arr, `id`, id);
