import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';

type Props = {
  sx: object;
  children: JSX.Element | string;
};

const TableCell: React.FC<Props> = ({ sx, children }) => {

  return (
    <Box sx={{ p: 0.5, ...sx }}>
      {children}
    </Box>
  )
};

export default TableCell;