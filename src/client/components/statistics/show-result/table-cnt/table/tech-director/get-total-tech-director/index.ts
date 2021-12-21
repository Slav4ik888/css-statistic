import { CalcResultType, TableData, TechDirector } from "../../../../../../../../types";
import getTableBody from "../../utils/get-table-body";


export default function getTableDataTotalTechDirector(data: TechDirector): TableData {
  return {
    headPrimary: [
      {
        id    :  `10`,
        order : 10,
        width : `100%`,
        label : `Итоговые значения`
      }
    ],

    body: getTableBody(CalcResultType.TECH_DIRECTOR, data)
  }
}