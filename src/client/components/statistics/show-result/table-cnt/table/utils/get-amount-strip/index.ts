import { ServiceItem, TableStrip } from "../../../../../../../../types";
import { TextAlign } from "../../../../../../../utils/styles";


export default function getAmountStrip(item: ServiceItem): TableStrip {
  return [
    {
      id: `10`,
      order: 10,
      width: 240,
      label: item.label,
      align: TextAlign.LEFT
    }, {
      id: `20`,
      order: 20,
      width: 80,
      bold : true,
      label: item.cost
    }, {
      id: `30`,
      order: 30,
      width: 80,
      bold : true,
      label: item.count
    }, {
      id: `40`,
      order: 40,
      width: 80,
      bold : true,
      label: item.total
    }
  ]
}