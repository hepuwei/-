import {combineReducers,applyMiddleware,createStore} from "redux";
import reduxThunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import market from "./reducers/market";
import city from "./reducers/city";
import search from "./reducers/search";
import limite from "./reducers/limite"
import detail from "./reducers/detail"

const reducers = combineReducers({
  market,
  city,
  search,
  limite,
  detail
})

const store = createStore(reducers,composeWithDevTools(applyMiddleware(reduxThunk)));

export default store;