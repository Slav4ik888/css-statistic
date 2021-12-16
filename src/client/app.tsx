import * as React from 'react';
// Routes
// import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import AuthRoute from './utils/routes/auth-route';
import PrivateRoute from './utils/routes/private-route';
import NoAuthRoute from './utils/routes/no-auth-route';
import { RouteType } from './utils/routes/routes';
// Readux Stuff
import { connect } from 'react-redux';
import { showWarning } from './redux/actions/ui';
import { getErrors } from './redux/selectors/ui';
import { State } from './redux/redux-types';
// MUI
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
// Pages
import Root from './pages/root';
import Statistis from './pages/statistics';
// Components
import Navbar from './components/navbar';
import MessageBar from './components/dialogs/message-bar';
// Functions
import { history } from './utils/routes/history';
import { isNoEmptyFields } from '../utils/objects/objects';
import getAllObjValue from '../utils/objects/get-all-obj-value';
// import screenListener from './utils/screens/listener-rezise-screen';
// Types
import { Errors } from '../types';
// Styles
import { useTheme } from '@emotion/react';


const useStyles = (theme) => ({
  body: {
    backgroundColor: theme.body.background,
  },
});


type Props = {
  errors?      : Errors;
  showWarning? : (m: string) => void;
};


const App: React.FC<Props> = ({ errors, showWarning }) => {
  const sx = useStyles(useTheme());

  // Global show errors
  React.useEffect(() => isNoEmptyFields(errors) ? showWarning(getAllObjValue(errors)) : null, [errors]);
 

  return (
    <Box sx={sx.body}>
      <CssBaseline />

      <Router history={history}>
        <Navbar history={history} />

        <Box component="main" sx={{ flexGrow: 1, minHeight: `calc(100vh - 65px)` }}>
          <MessageBar />

          <Switch>
            <NoAuthRoute exact path={RouteType.ROOT} component={Root} />

            <PrivateRoute exact path={RouteType.WS} component={Root} />
            <PrivateRoute exact path={RouteType.STATS} component={Statistis} />
            <Route
              render={() => (
                <>
                  <h1>
                    404.
                    <br />
                    <small>Page not found</small>
                  </h1>
                  <Redirect to={RouteType.LOGIN} />
                </>
              )}
            />
          </Switch>
        </Box>

      </Router>
    </Box>
  );
};


const mapStateToProps = (state: State) => ({
  errors: getErrors(state)
});

export default connect(mapStateToProps, { showWarning })(App);