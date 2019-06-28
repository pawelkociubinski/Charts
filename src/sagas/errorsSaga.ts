import {all, takeEvery} from 'redux-saga/effects';

function* handleError(action) {
  console.log(action);
}

export default function* errorsSaga() {
  yield takeEvery('AUTHENTICATION_USER_FAILED', handleError);
}
