import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  return <Route {...rest} render={props => <Component {...props} />} />;
}

PrivateRoute.propTypes = {
  component: PropTypes.node
};

export default PrivateRoute;
