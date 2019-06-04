import { all, takeLeading, put, call } from "redux-saga/effects";
import { switches } from "../helpers/api";

function* fetchSwitches () {
  try {
    yield put({ type: "FETCH_SWITCHES_STARTED" });
    const response = yield call(switches.get);
    yield put({ type: "FETCH_SWITCHES_SUCCEEDED", data: response.data });
    yield put({ type: "FETCH_SWITCHES_FINISHED" });

  } catch (error) {
    yield put({ type: "FETCH_SWITCHES_FAILED", error: error });
  }
}

export default function* switchesSaga () {
  yield all([
    takeLeading("FETCH_SWITCHES_REQUESTED", fetchSwitches)
  ]);
}