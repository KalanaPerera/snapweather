import React, { Component } from "react";
import CustomSlider from "./components/CustomSlider";
import "./styles/App.css";

const sliderMapping = [
  { list: ["Singapore", "Paris", "Dubai"], theme: "theme-cloudy-sky" },
  { list: ["Colombo", "Canada", "Manila"], theme: "theme-heavy-rain" },
  { list: ["India", "Austin", "California"], theme: "theme-green-day" }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row" style={{ marginTop: `100px` }}>
            {sliderMapping.map((slider, idx) => {
              return <CustomSlider {...slider} sliderId={idx} key={idx} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
