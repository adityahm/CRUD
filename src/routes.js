import React from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import App from './app'
import Home from './scenes/Home'

const Login = () => (
  <div>Login</div>
)

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login}/>
      <App>
        <Switch>
          <Route path="/home" component={Home}/>
          <Redirect to="/" />
        </Switch>
      </App>
    </Switch>
  </Router>
)

export default Root
