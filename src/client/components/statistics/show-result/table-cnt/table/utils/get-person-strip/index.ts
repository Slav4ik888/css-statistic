import { IndividualStripItem, TableStrip } from "../../../../../../../../types";
import { TextAlign } from "../../../../../../../utils/styles";


export default function getPersonStrip(item: IndividualStripItem): TableStrip {
  return [
    {
      id: `10`,
      order: 10,
      width: 160,
      label: item.label, // getFio(item.person, true),
      align: TextAlign.LEFT
    }, {
      id: `20`,
      order: 20,
      width: 80,
      label: item.countsCss
    }, {
      id: `30`,
      order: 30,
      width: 80,
      label: item.scoresCss
    }, {
      id: `40`,
      order: 40,
      width: 80,
      label: item.countsInstCss
    }, {
      id: `50`,
      order: 50,
      width: 80,
      label: item.scoresInstCss
    }, {
      id: `60`,
      order: 60,
      width: 80,
      label: item.scoresExpCss
    }, {
      id: `70`,
      order: 70,
      width: 80,
      label: item.countsBadcom
    }, {
      id: `80`,
      order: 80,
      width: 80,
      label: item.scoresBadcom
    }, {
      id: `90`,
      order: 90,
      width: 80,
      bold : true,
      label: item.total
    }
  ]
}