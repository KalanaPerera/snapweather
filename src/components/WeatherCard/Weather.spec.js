import React from "react";
import { mount } from "enzyme";
import Weather from "./Weather";
import store from "../../store/index";
import { Provider } from "react-redux";

const data = {
  location: {
    name: "Paris",
    region: "Ile-de-France",
    country: "France",
    lat: 48.87,
    lon: 2.33,
    tz_id: "Europe/Paris",
    localtime_epoch: 1553843914,
    localtime: "2019-03-29 8:18"
  },
  current: {
    last_updated_epoch: 1553843711,
    last_updated: "2019-03-29 08:15",
    temp_c: 8.0,
    temp_f: 46.4,
    is_day: 1,
    condition: {
      text: "Sunny",
      icon: "//cdn.apixu.com/weather/64x64/day/113.png",
      code: 1000
    },
    wind_mph: 6.9,
    wind_kph: 11.2,
    wind_degree: 40,
    wind_dir: "NE",
    pressure_mb: 1029.0,
    pressure_in: 30.9,
    precip_mm: 0.0,
    precip_in: 0.0,
    humidity: 81,
    cloud: 0,
    feelslike_c: 6.0,
    feelslike_f: 42.9,
    vis_km: 9.0,
    vis_miles: 5.0,
    uv: 3.0,
    gust_mph: 7.8,
    gust_kph: 12.6
  }
};

describe("<Profile />", () => {
  it("contains h4", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Weather
          theme="theme-cloudy-sky"
          weather={data}
          key="1"
          sliderId="0"
          city="Paris"
        />
      </Provider>
    );
    const value = wrapper.find('.name').text()
    expect(value).toEqual('Paris')
  });
});
