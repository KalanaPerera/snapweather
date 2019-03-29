import {
  LOAD_WEATHER_DATA,
  LOAD_WEATHER_DATA_SUCCESS
} from "../constants/action-types";

const initialState = {
  0: {},
  1: {},
  2: {}
};
function rootReducer(state = initialState, action) {
  if (action.type === LOAD_WEATHER_DATA_SUCCESS) {
    return {
      ...state,
      ...{ [action.key]: { data: action.payload, loading: false } }
    };
  }

  if (action.type === LOAD_WEATHER_DATA) {
    return {
      ...state,
      ...{ [action.key]: { data: {}, loading: true } }
    };
  }

  return state;
}

export default rootReducer;
