import {
  LOAD_WEATHER_DATA,
  LOAD_WEATHER_DATA_SUCCESS
} from "../constants/action-types";

export function loadWeatherData(payload, key) {
  return { type: LOAD_WEATHER_DATA, payload, key };
}

export function loadWeatherDataSuccess(payload, key) {
    return { type: LOAD_WEATHER_DATA_SUCCESS, payload, key };
  }
