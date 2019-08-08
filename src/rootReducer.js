import { combineReducers } from 'redux';
import login from './scenes/Login/reducer';
import users from './scenes/Users/reducer'

export default combineReducers({
  login,
  users
});
