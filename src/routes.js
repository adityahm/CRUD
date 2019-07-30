import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './scenes/Home';
import Login from './scenes/Login';
import PrivateRoute from './privateRoute';

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/home" component={Home} />
    </Switch>
  </Router>
);

export default Root;
