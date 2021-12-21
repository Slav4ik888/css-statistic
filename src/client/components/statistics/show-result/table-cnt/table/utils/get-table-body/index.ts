import { CalcResultType } from "../../../../../../../../types";
import getStripByType from "../get-strip-by-type";


export default function getTableBody(type: CalcResultType, arr: Array<any>) {
  return arr.map(item => ({
    label : item.label,
    strip : getStripByType(type, item)
  }));
}