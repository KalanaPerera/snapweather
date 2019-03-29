import axios from "axios";
import { put, takeEvery, delay } from "redux-saga/effects";
import * as actions from "../actions/";
import { LOAD_WEATHER_DATA } from "../constants/action-types";

//  REST API URL
const baseUrl =
  "http://api.apixu.com/v1/current.json?key=6ea6fd690860405d9ae12949192803&q=";

// sending request with payload
function* loadWeatherData(action) {
  const response = yield axios.get(`${baseUrl}${action.payload}`);
  yield delay(1000);
  yield put(actions.loadWeatherDataSuccess(response.data, action.key));
}

// watches for actions dispatched to the store and starts loadWeatherData saga
export function* watchWeatherData() {
  yield takeEvery(LOAD_WEATHER_DATA, loadWeatherData);
}
