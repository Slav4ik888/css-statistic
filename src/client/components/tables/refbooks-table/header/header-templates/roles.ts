import { Table } from '../../../../../../types';


export const roles: Table = {
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
        label: `Название роли`,
        styles: {
          width: `240px`,
          minWidth: `240px`
        }
      },
      // {
      //   label: `Тип роли`,
      //   styles: {
      //     width: `100px`,
      //     minWidth: `100px`
      //   }
      // },
      {
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