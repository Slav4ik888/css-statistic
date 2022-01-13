import React from 'react';
// Redux
import { connect } from 'react-redux';
import { getAuthenticated } from '../../redux/selectors/user';
// Routes
import { Route, Redirect } from 'react-router-dom';
import { RouteType } from './routes';


const AdminRoute = ({ exact, path, render, authenticated, isRoleSuper }) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={() => {
        if (authenticated === true && isRoleSuper === true) {
          return render();

        } else {
          return <Redirect to={RouteType.ROOT} />;
        }
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  authenticated: getAuthenticated(state),

});

export default connect(mapStateToProps)(AdminRoute);
