import { takeLatest, call, put, all } from 'redux-saga/effects';
import client from './services/api';
import { loginSuccess, loginFail } from './scenes/Login/actions';
import { LOGIN_TRY } from './scenes/Login/constants';
import { FETCH_USERS_TRY } from './scenes/Users/constants';
import { fetchUsersSuccess, fetchUsersFail } from './scenes/Users/actions';

function loginApi(authParams) {
  return client.post('/user/signin', {
    ...authParams
  });
}

function usersApi() {
  return client.get('/user/list')
}

function* loginWorker(action) {
  try {
    const data = yield call(loginApi, action.payload);
    yield put(loginSuccess(data));
  } catch (e) {
    yield put(loginFail());
  }
}

function* loginWatcher() {
  yield takeLatest(LOGIN_TRY, loginWorker);
}

function* usersWorker() {
  try {
    const response = yield call(usersApi)
    yield put(fetchUsersSuccess(response.data))
  } catch (e) {
    yield put(fetchUsersFail(e))
  }
}

function* usersWatcher() {
  yield takeLatest(FETCH_USERS_TRY, usersWorker)
}

export default function* rootSaga() {
  yield all([
    loginWatcher(),
    usersWatcher()
    // add other watchers to the array
  ]);
}
