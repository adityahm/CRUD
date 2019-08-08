import { connect } from 'react-redux';
import LoginComponent from './component';
import { login } from './actions';

const mapStateToProps = state => ({
  isLoggingIn: state.login.isLoggingIn,
  loginStatus: state.login.loginStatus,
  data: state.login.data
});

const mapDispatchToProps = dispatch => ({
  requestLogin: (credentials) => {
    dispatch(login(credentials));
  }
});

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);

export default Login;
