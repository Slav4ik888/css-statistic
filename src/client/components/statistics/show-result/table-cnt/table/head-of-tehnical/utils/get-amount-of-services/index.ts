import { TableData, TableBody, HeadOfTechnical, CalcResultType } from "../../../../../../../../../types";
import getTableBody from "../../../utils/get-table-body";
import getAmountStrip from "../../../utils/get-amount-strip";




export default function getTableDataAmountOfServices(data: HeadOfTechnical): TableData {
  return {
    headPrimary: [
      {
        id    : `10`,
        order : 10,
        width : `100%`,
        label : `Сумма оказанных услуг`
      }
    ],

    headSecondary: [
      {
        id    : `10`,
        order : 10,
        width : 240,
        label : `Наименование`
      }, {
        id    : `20`,
        order : 20,
        width : 80,
        label : `Стоимость`
      }, {
        id    : `30`,
        order : 30,
        width : 80,
        label : `Количество оказанных`
      }, {
        id    :  `50`,
        order : 50,
        width : 80,
        label : `Итоги`
      }
    ],

    body: getTableBody(CalcResultType.AMOUNT_SERVICES, data.renderedServices)
  }
}