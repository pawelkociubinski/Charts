// Dependencies
import {all, fork} from 'redux-saga/effects';
// Sagas
import userSaga from './userSaga';
import companiesSaga from './companiesSaga';
import switchesSaga from './switchesSaga';
import errorsSaga from './errorsSaga';

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(companiesSaga),
    fork(switchesSaga),
    fork(errorsSaga),
  ]);
}
