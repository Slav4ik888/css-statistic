import { Users } from "../../../../../../types";
import { getItemFromArrByField } from "../../../../../../utils/arrays/get-item-from-arr-by-field/get-item-from-arr-by-field";
import { updateArrWithItemByField } from "../../../../../../utils/arrays/update-arr-with-item-by-field";


export function setActiveInArr(arr: Users, id: string) {

  const item = getItemFromArrByField(arr, `id`, id);
  item.active = false;

  return updateArrWithItemByField(arr, `id`, item);
};
