import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './scenes/Login';
import Home from './scenes/Home';
import Users from './scenes/Users';
import App from './app';
import PrivateRoute from './privateRoute';

const Root = () => (
  <Router>
    <Switch>
      <App>
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/users" component={Users} />
      </App>
    </Switch>
  </Router>
);

export default Root;
