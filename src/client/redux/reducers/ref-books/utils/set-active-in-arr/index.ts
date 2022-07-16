import { Users } from "../../../../../../types";
import { getItemById, updateArrById } from "../../../../../../utils/arrays";


export function setActiveInArr(arr: Users, id: string) {

  const item = getItemById(arr, id);
  item.active = false;

  return updateArrById(arr, item);
};
