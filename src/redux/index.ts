import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";

import { gitHubRepositoriesReducer } from "./reducers/searchRepositoriesReducer";
export const middlewares = [thunkMiddleware, logger];

export const rootReducer = combineReducers({
  gitHubRepositories: gitHubRepositoriesReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
}
