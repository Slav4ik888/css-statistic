import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
// Styles
import { Position } from '../../../utils/styles';


const useStyles = () => ({
  page: {
    margin: `auto`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    maxWidth: `1400px`,
    height: { sm: `calc(100vh - 64px)` },
    backgroundImage: `url('../public/img/fon.jpg')`,
    backgroundPosition: `bottom`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`,
    position: Position.ABS,
    top: 0, right: 0, bottom: 0, left: 0
  }
});

type Props = {
  authenticated: boolean;
};


// Главная страница неавторизованного пользователя
const RootNotAuthContainer: React.FC<Props> = ({ authenticated }) => {
  if (authenticated) return null;
  const classes = useStyles();

  
  return (
    <>
      <Box sx={classes.page}>
        
      </Box>
    </>
  );
}

export default RootNotAuthContainer;
