import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
// Styles
import { useTheme } from '@emotion/react';


const useStyles = (theme) => ({
  root: {
    mt: 5, mb: 2,
    color: theme.table.title.color,
    fontSize: theme.table.title.fontSize
  },
});


type Props = {
  title: string;
};


const TableTitle: React.FC<Props> = ({ title }) => {
  const sx = useStyles(useTheme());


  return (
    <Box sx={sx.root}>
      {title}
    </Box>
  );
};

export default TableTitle;