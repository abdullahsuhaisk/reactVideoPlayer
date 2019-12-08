import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import reduxThunk from "redux-thunk";
import baseReducers from "./base/baseReducers";
import layoutReducer from "./layout/layoutReducer";
import playerReducer from "./Player/playerReducer";

// TODO: AXIOS CONFIGURE
// App reducers
// import firebaseConfig from "../../common/firebase";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    base: baseReducers,
    layout: layoutReducer,
    player: playerReducer
  }),
  composeEnhancers(applyMiddleware(reduxThunk))
);

export default store;
