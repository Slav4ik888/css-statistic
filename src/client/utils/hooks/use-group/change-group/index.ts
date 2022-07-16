import { TuplesGroup, UseGroup } from "../types";
import { setValue } from "./set-value";


/**
 * 
 */
export function changeGroup<O, T>(
  G           : UseGroup<O>,
  tuple       : TuplesGroup,
  noChanges?  : boolean
) {
  if (!G || !G.group || !tuple.length) return null;

  const newGroup = Object.assign({}, G.group);
  
  tuple.forEach(v => setValue(newGroup, v.value, v.scheme))

  G.updateGroup(newGroup, noChanges);
}
