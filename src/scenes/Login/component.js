import React from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../../context/auth';
import { Redirect } from 'react-router-dom';

class LoginComponent extends React.Component {

  static contextType = AuthContext
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const params = {
      email,
      password
    };

    this.props.requestLogin(params);
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const { email, password } = this.state;
    const {loginStatus, location, data} = this.props;
    const auth = this.context
    const referer = (location.state && location.state.referer) || '/home';
    if (loginStatus) {
      auth.setAuthTokens(data)
      return <Redirect to={referer} />
    }

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

}

LoginComponent.propTypes = {
  requestLogin: PropTypes.func,
  loginStatus: PropTypes.bool,
  data: PropTypes.object,
  location: PropTypes.shape({
    state: PropTypes.shape({
      referer: PropTypes.string
    })
  })
};

export default LoginComponent;
