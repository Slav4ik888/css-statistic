import * as React from 'react';
// Components
import Cell from '../../../../tables/refbooks-table/cell';
// Types & Styles
import { Role } from '../../../../../../types';
import { TextAlign } from '../../../../../utils/styles';



const useStyles = () => ({
  count: {
    width: `35px`,
    minWidth: `35px`,
    textAlign: TextAlign.CENTER
  },
  role: {
    width: `240px`,
    minWidth: `240px`
  },
  type: {
    width: `100px`,
    minWidth: `100px`
  },
  description: {
    // whiteSpace: WhiteSpace.NOWRAP,
    // textOverflow: `ellipsis`,
    maxHeight: `75px`,
    overflow: `hidden`,
    width: `100%`
  }
});



type Props = {
  count: number;
  item?: Role;
};

/**
 * Строка таблицы справочника Роли
 */
const RowContent: React.FC<Props> = ({ count, item }) => {
  const sx = useStyles();

  return (
    <>
      <Cell sx={sx.count}>{count}</Cell>
      <Cell sx={sx.role}>{item.role}</Cell>
      <Cell sx={sx.description}>{item.description}</Cell>
    </>
  );
};

export default RowContent;
