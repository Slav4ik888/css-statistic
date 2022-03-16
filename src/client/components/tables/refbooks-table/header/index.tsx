import * as React from 'react';
// MUI Stuff
import { Box, Tooltip } from '@mui/material';
// Types
import { Table } from '../../../../../types';
// Consts & Styles
import { cl, WhiteSpace } from '../../../../utils/styles';
import { useTheme } from '@emotion/react';



const useStyles = (theme) => ({
  root: {
    display         : `flex`,
    alignItems      : `center`,
    backgroundColor : `#eee`,
    borderBottom    : `1px solid #e0e0e0`,
    height          : 45
    // minHeight: `50px`,
    // textAlign: `center`
  },
  cell: {
    whiteSpace      : WhiteSpace.NOWRAP,
    textOverflow    : `ellipsis`,
    overflow        : `hidden`,
    borderRight     : `1px solid #e0e0e0`,
    cursor          : `pointer`
  },
  noBorder: {
    border          : 0
  }
});



type Props = {
  data: Table;
};

const Header: React.FC<Props> = ({ data }) => {
  const
    sx    = useStyles(useTheme()),
    cells = data.header.cells;

  
  return (
    <Box sx={{ ...sx.root, ...data.header.styles }}>
      {
        cells.map((cell, i) => <Tooltip key={cell.label} title={cell.label} arrow enterDelay={1000} enterNextDelay={1000}>
          <Box
            sx={{
              ...sx.cell,
              ...cell.styles,
              ...cl(sx.noBorder, cells.length === (i + 1))
            }}
          >
            {
              cell.label
            }
          </Box>
        </Tooltip>)
      }
    </Box>
  );
};


export default Header;
