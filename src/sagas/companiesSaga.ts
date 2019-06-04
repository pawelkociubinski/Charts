import { all, takeLeading, put, call } from "redux-saga/effects";
import { companies } from "../helpers/api";

function* fetchCompanies () {
  try {
    yield put({ type: "FETCH_COMPANIES_STARTED" });
    const response = yield call(companies.get);
    yield put({ type: "FETCH_COMPANIES_SUCCEEDED", data: response.data });
    yield put({ type: "FETCH_COMPANIES_FINISHED" });

  } catch (error) {
    yield put({ type: "FETCH_COMPANIES_FAILED", error: error });
  }
}

export default function* companiesSaga () {
  yield all([
    takeLeading("FETCH_COMPANIES_REQUESTED", fetchCompanies)
  ]);
}