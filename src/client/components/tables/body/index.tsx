import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import Cell from '../cell';
// Functions
import { sortingArr } from '../../../../utils/sorting/sorting-arr';
// Types
import { TableData } from '../../../../types';
// Styles
import { useTheme } from '@emotion/react';
import { cl, fc_, fc_sb, FlexDirection } from '../../../utils/styles';


const useStyles = (theme) => ({
  root: {
    display: `flex`,
    flexDirection: FlexDirection.COLUMN,
    witdh: `100%`,
    color: theme.table.body.color,
    backgroundColor: theme.table.body.background,
    fontSize: theme.table.body.fontSize
  },
  row: {
    ...fc_sb,
    borderBottom: `1px solid #eee`
  }
});


type Props = {
  data: TableData;
};


const TableBody: React.FC<Props> = ({ data }) => {
  if (!data?.body?.length) return null;
  const sx = useStyles(useTheme());

  const sorted = React.useMemo(() => sortingArr(data.body, `person`), []);

  return (
    <Box sx={sx.root}>
      {
        sorted.map((row, i) => <Box
          key={row.person + i}
          sx={{
            ...sx.row,
            ...cl({ border: `none` }, sorted.length <= (i + 1)) 
          }}>
          {
            row.strip.map(item => <Cell
              key={item.id}
              sx={{
                width      : item.width,
                minWidth   : item.width,
                maxWidth   : item.width,
                fontWeight : item?.bold ? 600 : 400,
                textAlign  : item?.align || `center`
              }}
            >
              {
                item.label?.toString()
              }
            </Cell>
            )
          }
        </Box>)
      }
    </Box>
  );
};

export default TableBody;