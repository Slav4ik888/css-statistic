import { UseObject } from "../types";

export function changeObject<O, T>(hook: UseObject<O>, value: T, name1: string, name2?: string, name3?: string) {
  const newObj = Object.assign({}, hook.obj);
  
  if      (name3) newObj[name1][name2][name3] = value;
  else if (name2) newObj[name1][name2] = value;
  else if (name1) newObj[name1] = value;

  hook.setObject(newObj);
}
