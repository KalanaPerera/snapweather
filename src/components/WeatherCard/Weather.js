import React, { Component } from "react";
import moment from "moment";
import { loadWeatherData } from "../../actions/";
import { connect } from "react-redux";

class Weather extends Component {
  handleClick(sliderId, key) {
    this.props.loadWeatherData(key, sliderId);
  }

  render() {
    const { theme, weather, sliderId, city } = this.props;

    if (Object.keys(weather).length === 0) {
      return null;
    }

    return (
      <div className="component-main-weather ">
        <div className="component-weather">
          <div className="header">
            <span className="pull-left">
              <img src="https://snaphunt.com/favicon.ico" alt="cloud" />
            </span>
            <span
              className="pull-right font-20 glyphicon  glyphicon-repeat cursor-pointer "
              aria-hidden="true"
              onClick={() => this.handleClick(sliderId, city)}
            />
          </div>

          <div className="body">
            <span className="custom-icon-cloud" />
          </div>

          <div className={"details  clearfix " + theme}>
            <div className="col-md-3">
              <span className="font-35 bold"> {weather.current.temp_c}° </span>
            </div>

            <div className="col-md-7">
              <span className="font-20 name">{weather.location.name}</span>
              <span className="block font-12 ">{weather.location.country}</span>
            </div>

            <div className="col-md-2 border-left">
              <span>
                {moment(weather.location.localtime.split(" ")[0]).format("MMM")}
              </span>
              <span className="font-20 block bold">
                {moment(weather.location.localtime.split(" ")[0]).format("DD")}
              </span>
            </div>
          </div>

          <div className="bottom-details">
            <div className="set">
              <div className="list">
                <i className="custom-icon i-wind"> </i>
                <span> {weather.current.wind_mph} MPH</span>
              </div>

              <div className="list">
                <i className="custom-icon i-rain-drop"> </i>
                <span> {weather.current.humidity} %</span>
              </div>

              <div className="list">
                <i
                  className={
                    "custom-icon " +
                    (weather.current.is_day ? "i-sun " : " i-moon")
                  }
                />
                <span> {weather.current.is_day ? "Day " : " Night"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { loadWeatherData }
)(Weather);
