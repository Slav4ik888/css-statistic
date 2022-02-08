import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RouteType } from '../../utils/routes/routes';
// MUI Stuff
import Box from '@mui/material/Box';
// Types
import { fcc } from '../../utils/styles';


const NotFoundPage: React.FC = () => {

  return (
    <>
      <Route
        render={() => (
          <>
            <Box sx={{ ...fcc, height: `80vh`, fontSize: `1.8rem`, fontStyle: `italic` }}>
              Извините, запрошенная страница не найдена...
            </Box>
            <Redirect to={RouteType.LOGIN} />
          </>
        )}
      /> 
    </>
  );
};

export default NotFoundPage;
