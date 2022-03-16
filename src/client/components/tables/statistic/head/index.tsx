import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import Cell from '../cell';
// Functions
import { sortingArr } from '../../../../../utils/sorting/sorting-arr';
// Types
import { TableData, TableHeadType } from '../../../../../types';
// Styles
import { useTheme } from '@emotion/react';
import { fc_, fc_sb } from '../../../../utils/styles';


const useStyles = (theme, type: TableHeadType) => ({
  root: {
    ...fc_sb,
    witdh: `100%`,
    color: theme.table[type].color,
    backgroundColor: theme.table[type].background,
    fontSize: theme.table[type].fontSize,
    px: 1
  },
});


type Props = {
  type: TableHeadType; 
  data: TableData;
};


const TableHead: React.FC<Props> = ({ type, data }) => {
  if (!data?.[type]?.length) return null;
  const sx = useStyles(useTheme(), type);

  const sorted = React.useMemo(() => sortingArr(data[type], `order`), []);
  console.log(`sorted[${type}]: `, sorted);

  return (
    <Box sx={sx.root}>
      {
        sorted.map(f => <Cell
          key = {f.id}
          sx  = {{
            width      : f.width,
            minWidth   : f.width,
            maxWidth   : f.width,
            fontWeight : f?.bold ? 600 : 400,
            textAlign  : f?.align || `center`
          }}
        >
          {
            f.label?.toString()
          }
        </Cell>)
      }
    </Box>
  );
};

export default TableHead;