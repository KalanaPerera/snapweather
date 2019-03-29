import { createStore, applyMiddleware, combineReducers } from "redux";
import rootReducer from "../reducers/index";
import { watchWeatherData } from "../services/saga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    rootReducer
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchWeatherData);

export default store;
