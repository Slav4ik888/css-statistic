import * as React from 'react';
// Routes
import { Router, Switch } from 'react-router-dom'; // import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { RouteType, NoAuthRoute, PrivateRoute, AuthRoute, history } from './utils/routes';
// Readux Stuff
import { connect } from 'react-redux';
import { getUser } from './redux/actions/user';
import { showWarning } from './redux/actions/ui';
import { getErrors } from './redux/selectors/ui';
import { State } from './redux/redux-types';
// MUI
import { CssBaseline, Box } from '@mui/material';
// Pages
import { Root, Login, Statistics, PageNotFound } from './pages';
// Components
import Navbar from './components/navbar';
import MessageBar from './components/dialogs/message-bar';
// Functions
import { isNoEmptyFields } from '../utils/objects/objects-base';
import getAllObjValue from '../utils/objects/get-all-obj-value';
// Types, Styles
import { Errors } from '../types';
import { useTheme } from '@emotion/react';


const useStyles = (theme) => ({
  body: {
    backgroundColor: theme.body.background,
  },
  main: {
    flexGrow  : 1,
    minHeight : `calc(100vh - 65px)`
  }
});


type Props = {
  errors?      : Errors;
  getUser?     : () => void;
  showWarning? : (m: string) => void;
};


const App: React.FC<Props> = ({ errors, getUser, showWarning }) => {
  const sx = useStyles(useTheme());

  React.useEffect(() => getUser(), []);

  // Global show errors
  React.useEffect(() => isNoEmptyFields(errors) ? showWarning(getAllObjValue(errors)) : null, [errors]);
 

  return (
    <Box sx={sx.body}>
      <CssBaseline />

      <Router history={history}>
        <Navbar history={history} />

        <Box component="main" sx={sx.main}>
          <MessageBar />

          <Switch>
            <AuthRoute    exact path={RouteType.LOGIN} component={Login} />
            <NoAuthRoute  exact path={RouteType.ROOT}  component={Root} />

            <PrivateRoute exact path={RouteType.WS}    component={Root} />
            <PrivateRoute exact path={RouteType.STATS} component={Statistics} />
            
            <PageNotFound />
          </Switch>
        </Box>
      </Router>
    </Box>
  );
};


const mapStateToProps = (state: State) => ({
  errors: getErrors(state)
});

const mapActionsToProps = ({ getUser, showWarning });

export default connect(mapStateToProps, mapActionsToProps)(App);
