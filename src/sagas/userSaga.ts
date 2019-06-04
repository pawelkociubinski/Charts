import {all, takeLeading, put, call} from 'redux-saga/effects';
import {push} from 'connected-react-router';
import {authenticate} from '../helpers/api';

function* fetchUser(action) {
  try {
    yield put({type: 'AUTHENTICATION_USER_RESET'});

    yield put({type: 'AUTHENTICATION_USER_STARTED'});

    const response = yield call(
      authenticate,
      action.payload.email,
      action.payload.password
    );

    yield put({
      type: 'AUTHENTICATION_USER_SUCCEEDED',
      payload: {
        user: response.data,
      },
    });

    yield put({type: 'AUTHENTICATION_USER_FINISHED'});

    yield put(push('/dashboard'));
  } catch (error) {
    yield put({
      type: 'AUTHENTICATION_USER_FAILED',
      error: error,
    });
  }
}

export default function* userSaga() {
  yield all([takeLeading('AUTHENTICATION_USER_REQUESTED', fetchUser)]);
}
