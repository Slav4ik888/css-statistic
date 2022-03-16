import { Table } from '../../../../../../types';


export const users: Table = {
  table: {
    styles: {},
  },
  header: {
    styles: {},
    cells: [
      {
        label: `№`,
        styles: {
          width: `35px`,
          minWidth: `35px`
        }
      }, {
        label: `ФИО`,
        styles: {
          width: `270px`,
          minWidth: `270px`
        }
      }, {
        label: `Тип пользователя`,
        styles: {
          width: `150px`,
          minWidth: `150px`
        }
      }, {
        label: `Роль`,
        styles: {
          width: `150px`,
          minWidth: `150px`
        }
      }, {
        label: `Email`,
        styles: {
          width: `150px`,
          minWidth: `150px`
        }
      }, {
        label: `Примечание`,
        styles: {
          width: `100%`
        }
      }
    ]
  },
  body: {
    styles: {}
  },
  row: {
    styles: {}
  }
}