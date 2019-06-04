import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import reducer from "./reducers";
import rootSaga from "./sagas";

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

export default createStore(
  reducer(history),
  applyMiddleware(
    routerMiddleware(history),
    sagaMiddleware
  ),
);

sagaMiddleware.run(rootSaga);