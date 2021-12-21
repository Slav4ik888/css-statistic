import { CalcResultType, IndividualStripItem, ServiceItem, TotalTechnicalStripItem, TechDirectorItem } from "../../../../../../../../types";
import getAmountStrip from "../get-amount-strip";
import getPersonStrip from "../get-person-strip";
import getTotalStrip from "../get-total-strip";
import getTechDirStrip from '../get-tech-dir-strip';

export default function getStripFuncByType(type: CalcResultType, item: any) {
  switch (type) {
    case CalcResultType.INDIVIDUAL      : return getPersonStrip  (item as IndividualStripItem)
    case CalcResultType.AMOUNT_SERVICES : return getAmountStrip  (item as ServiceItem)
    case CalcResultType.TOTAL_TECHNICAL : return getTotalStrip   (item as TotalTechnicalStripItem)
    case CalcResultType.TECH_DIRECTOR   : return getTechDirStrip (item as TechDirectorItem)
  }
}