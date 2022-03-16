import * as React from 'react';
// Components
import Cell from '../../../../tables/refbooks-table/cell';
// Types
import { Role } from '../../../../../../types';
// Styles
import { TextAlign } from '../../../../../utils/styles';
import { useTheme } from '@emotion/react';


const useStyles = (theme) => ({
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

// Строка таблицы справочника Роли
const RowContent: React.FC<Props> = ({ count, item }) => {
  const sx = useStyles(useTheme());
  const _item = React.useMemo(() => item, [item]);


  return (
    <>
      <Cell sx={sx.count}>{count.toString()}</Cell>
      <Cell sx={sx.role}>{_item.role}</Cell>
      <Cell sx={sx.description}>{_item.description}</Cell>
    </>
  );
};

export default RowContent;