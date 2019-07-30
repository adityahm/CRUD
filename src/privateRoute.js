import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from './index';

function PrivateRoute({ component: Component, ...rest }) {
  const value = React.useContext(AuthContext);
  return value ? (
    <Route {...rest} render={props => <Component {...props} />} />
  ) : (
    <Redirect to="/" />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.func
};

export default PrivateRoute;
