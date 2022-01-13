import * as React from 'react';
// Redux
import { connect } from 'react-redux';
import { getAuthenticated } from '../../redux/selectors/user';
import { State } from '../../redux/redux-types';
// Routes
import { Route, Redirect } from 'react-router-dom';
import { RouteType } from './routes';


type Props = {
  component: React.ElementType;
  // render: () => React.ReactNode;
  authenticated: boolean;
  exact: boolean;
  path: string;
}

const PrivateRoute: React.FC<Props> = ({ component: Component, exact, path, authenticated }) => {

  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => {
        if ( authenticated ) {
          return <Component {...props} />
        }
        else {
          return <Redirect to={RouteType.LOGIN} />
        }
      }}
    />
  );
};

const mapStateToProps = (state: State) => ({
  authenticated: getAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);
