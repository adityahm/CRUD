import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './scenes/Home';
import PrivateRoute from './privateRoute';

const Login = () => <div>Login</div>;

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/home" component={Home} />
    </Switch>
  </Router>
);

export default Root;
