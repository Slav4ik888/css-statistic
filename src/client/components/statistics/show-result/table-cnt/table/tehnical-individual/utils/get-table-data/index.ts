import { TableData, IndividualData, CalcResultType } from "../../../../../../../../../types";
import getTableBody from "../../../utils/get-table-body";



export default function getTableData(data: IndividualData): TableData {

  return {
    headPrimary: [
      {
        id    : `10`,
        order : 10,
        width : 160,
        label : ``
      }, {
        id    : `20`,
        order : 20,
        width : 160,
        label : `ТЕХПОДДЕРЖКА ДА-ТЕЛЕКОМ`
      }, {
        id    : `30`,
        order : 30,
        width : 160,
        label : `ИНСТАЛЛЯЦИЯ, ДА-ТЕЛЕКОМ`
      }, {
        id    :  `40`,
        order : 40,
        width : 80,
        label : `ОПЫТНОЕ ПРОИЗВОДСТВО`
      }, {
        id    :  `50`,
        order : 50,
        width : 160,
        label : `BADCOM`
      }, {
        id    :  `60`,
        order : 60,
        width : 80,
        label : `ИТОГО`
      }
    ],

    headSecondary: [
      {
        id    :  `10`,
        order : 10,
        width : 160,
        label : `ФИО`
      }, {
        id    :  `20`,
        order : 20,
        width : 80,
        label : `КОЛ-ВО принятых и оформленных инцидентов`
      }, {
        id    :  `30`,
        order : 30,
        width : 80,
        label : `БАЛЛЫ за завершённые инциденты`
      }, {
        id    :  `40`,
        order : 40,
        width : 80,
        label : `КОЛ-ВО принятых и оформленных инцидентов`
      }, {
        id    :  `50`,
        order : 50,
        width : 80,
        label : `БАЛЛЫ за завершённые инциденты`
      }, {
        id    :  `60`,
        order : 60,
        width : 80,
        label : `БАЛЛЫ за завершённые задачи`
      }, {
        id    :  `70`,
        order : 70,
        width : 80,
        label : `КОЛ-ВО принятых и оформленных инцидентов`
      }, {
        id    :  `80`,
        order : 80,
        width : 80,
        label : `БАЛЛЫ за завершённые инциденты`
      }, {
        id    :  `90`,
        order : 90,
        width : 80,
        label : ``
      }
    ],

    body: getTableBody(CalcResultType.INDIVIDUAL, data)
  }
}