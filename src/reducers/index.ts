import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";

import user from "./user";
import companies from "./companies";
import switches from "./switches";

export default (history: History) => (
  combineReducers({
    router: connectRouter(history),
    user,
    companies,
    switches,
  })
);
