import { TotalTechnicalStripItem, TableStrip } from "../../../../../../../../types";
import { TextAlign } from "../../../../../../../utils/styles";


export default function getTotalStrip(item: TotalTechnicalStripItem): TableStrip {
  return [
    {
      id: `10`,
      order: 10,
      width: 400,
      label: item.label,
      align: TextAlign.LEFT
    }, {
      id: `20`,
      order: 20,
      width: 80,
      bold : true,
      label: item.total
    }
  ]
}