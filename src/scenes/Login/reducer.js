import { LOGIN_TRY, LOGIN_SUCCESS, LOGIN_FAIL, SET_AUTHENTICATION } from './constants';

const initialState = {
  isLoggingIn: false,
  loginStatus: false,
  data: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_TRY:
      return {
        ...state,
        isLoggingIn: true
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        loginStatus: true,
        data: action.payload.data
      };

    case LOGIN_FAIL:
      return {
        ...state,
        isLoggingIn: false,
        loginStatus: false
      };

    case SET_AUTHENTICATION:
      return {
        ...state,
        isLoggingIn: false,
        loginStatus: true,
        data: action.data
      }

    default:
      return state;
  }
};
