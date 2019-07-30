import { takeLatest, call, put, all } from 'redux-saga/effects';
import client from './services/api';
import { loginSuccess, loginFail } from './scenes/Login/actions';
import { LOGIN_TRY } from './scenes/Login/constants';

function loginApi(authParams) {
  return client.post('/user/signin', {
    ...authParams
  });
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

export default function* rootSaga() {
  yield all([
    loginWatcher()
    // add other watchers to the array
  ]);
}
