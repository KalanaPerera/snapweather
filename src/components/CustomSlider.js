import React, { Component } from "react";
import Slider from "react-slick";
import { Weather } from "./WeatherCard";

import { connect } from "react-redux";
import { loadWeatherData } from "../actions/";

class CustomSlider extends Component {
  componentDidMount() {
    const { sliderId, list } = this.props;
    this.props.loadWeatherData(list[0], sliderId);
  }


  settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    beforeChange: (current, next) => {
      const { list, sliderId } = this.props;
      this.props.loadWeatherData(list[next], sliderId);
    }
  };

  render() {
    const { sliderId, weather } = this.props;
    const weatherData = weather[sliderId];
    return (
      <div className="col-md-4">
        <Slider {...this.settings}>
          {this.props.list.map(key => (
            <Weather
              theme={this.props.theme}
              weather={weatherData}
              key={key}
              sliderId={sliderId}
              city={key}
            />
          ))} 
        </Slider>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    weather: state.rootReducer
  };
}

export default connect(
  mapStateToProps,
  { loadWeatherData }
)(CustomSlider);
