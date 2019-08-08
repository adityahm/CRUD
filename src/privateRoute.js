import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import {useAuth} from './context/auth';

function PrivateRoute({ component: Component, ...rest }) {
  const login = useAuth();
  return <Route {...rest} render={props => (
    login.authTokens
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { referer: props.location.pathname } }} />
  )} />
}

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
};

export default PrivateRoute;
