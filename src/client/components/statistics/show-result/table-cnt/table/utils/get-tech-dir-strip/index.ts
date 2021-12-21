import { TechDirectorItem, TableStrip } from "../../../../../../../../types";
import { TextAlign } from "../../../../../../../utils/styles";


export default function getTechDirStrip(item: TechDirectorItem): TableStrip {
  return [
    {
      id: `10`,
      order: 10,
      width: 240,
      label: item.label,
      align: TextAlign.LEFT
    }, {
      id: `40`,
      order: 40,
      width: 80,
      bold : true,
      label: item.total
    }
  ]
}