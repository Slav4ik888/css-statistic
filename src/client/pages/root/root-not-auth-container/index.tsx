import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
// Styles
import { Position } from '../../../utils/styles';


const useStyles = () => ({
});

type Props = {
  authenticated: boolean;
};


// Главная страница неавторизованного пользователя
const RootNotAuthContainer: React.FC<Props> = ({ authenticated }) => {
  if (authenticated) return null;
  const sx = useStyles();

  
  return (
    <>
      <Box>
        
      </Box>
    </>
  );
}

export default RootNotAuthContainer;
