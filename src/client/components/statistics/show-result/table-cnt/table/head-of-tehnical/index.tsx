import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
// Types
// Styles
import { useTheme } from '@emotion/react';
import { FlexDirection } from '../../../../../../utils/styles';


const useStyles = (theme) => ({
  root: {
    display: `flex`,
    flexDirection: FlexDirection.COLUMN
  },
});



type Props = {
  
};


const HeadOfTehnicalDepartment: React.FC<Props> = ({  }) => {
  const sx = useStyles(useTheme());


  return (
    <Box sx={sx.root}>
      Руководитель производственного отделения
    </Box>
  );
};

export default HeadOfTehnicalDepartment;