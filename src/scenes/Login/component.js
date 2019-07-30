import React from 'react';
import PropTypes from 'prop-types';

class LoginComponent extends React.Component {

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
  requestLogin: PropTypes.func
};

export default LoginComponent;
