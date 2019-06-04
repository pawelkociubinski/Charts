// Dependencies
import { all, fork } from "redux-saga/effects";
// Sagas
import userSaga from "./userSaga";
import companiesSaga from "./companiesSaga";
import switchesSaga from "./switchesSaga";


export default function* rootSaga () {
  yield all([
    fork(userSaga),
    fork(companiesSaga),
    fork(switchesSaga),
  ]);
}