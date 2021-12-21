import { TableData, HeadOfTechnical, CalcResultType } from "../../../../../../../../../types";
import getTableBody from "../../../utils/get-table-body";


export default function getTableDataTotalTechnical(data: HeadOfTechnical): TableData {
  return {
    headPrimary: [
      {
        id    :  `10`,
        order : 10,
        width : `100%`,
        label : `Итоговые значения по техподдержке`
      }
    ],

    body: getTableBody(CalcResultType.TOTAL_TECHNICAL, data.totalTechnical)
  }
}