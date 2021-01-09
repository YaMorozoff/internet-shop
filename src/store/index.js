import { applyMiddleware, compose, createStore } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

const middleware = [thunk];

const composeEnhancers =
  typeof window !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const store = createStore(
  reducers,
  undefined,
  composeEnhancers(applyMiddleware(...middleware))
);

export { store };
