import getScheme from "../get-scheme";
import { TuplesGroup, UseGroup } from "../types";


const setValue = (group: object, value: any, scheme: string) => {
  const { field1, field2, field3, field4 } = getScheme(scheme);

  if (field4) {
    if (typeof group?.[field1] === `undefined`) group[field1] = {};
    if (typeof group?.[field1]?.[field2] === `undefined`) group[field1][field2] = {};
    if (typeof group?.[field1]?.[field2]?.[field3] === `undefined`) group[field1][field2][field3] = {};

    group[field1][field2][field3][field4] = value;
  }

  else if (field3) {
    if (typeof group?.[field1] === `undefined`) group[field1] = {};
    if (typeof group?.[field1]?.[field2] === `undefined`) group[field1][field2] = {};

    group[field1][field2][field3] = value;
  }
    
  else if (field2) {
    if (typeof group?.[field1] === `undefined`) group[field1] = {};
    
    group[field1][field2] = value;
  }
    
  else if (field1) group[field1] = value;
};


export default function changeGroup<O, T>(
  G: UseGroup<O>,
  tuple: TuplesGroup
) {
  if (!G || !G.group || !tuple.length) return null;

  const newGroup = Object.assign({}, G.group);
  
  tuple.forEach(v => setValue(newGroup, v.value, v.scheme))

  G.setGroup(newGroup);
  G.setIsChange(true);
}
