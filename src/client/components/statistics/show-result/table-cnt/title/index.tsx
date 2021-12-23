import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
// Styles
import { useTheme } from '@emotion/react';


const useStyles = (theme) => ({
  root: {
    my: 2, pl: 2,
    color: theme.paper.title.color,
    fontSize: theme.paper.title.fontSize
  },
});



const Title: React.FC = () => {
  const sx = useStyles(useTheme());

  return (
    <Box sx={sx.root}>
      Статистика из файлов техподдержки Да-Телеком и Badcom
    </Box>
  );
};

export default Title;