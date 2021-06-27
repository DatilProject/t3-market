import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import productReducer from "./productDucks";

const rootReducer = combineReducers({
  products: productReducer,
  // categories: categoryReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const middleware = applyMiddleware(thunk);
  const compose = composeEnhancers(middleware);
  const store = createStore(rootReducer, compose);
  return store;
}
