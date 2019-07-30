import { LOGIN_TRY, LOGIN_SUCCESS, LOGIN_FAIL } from './constants';

export const login = credentials => ({
  type: LOGIN_TRY,
  payload: credentials
});

export const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  payload: data
});

export const loginFail = () => ({
  type: LOGIN_FAIL
});
