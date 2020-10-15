import React, { Component } from "react";
import CurrentWeather from "./components/CurrentWeather"
import Search from "./components/Search";
import FullDay from "./components/FullDay";
import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";





class App extends Component {
 
 constructor(props) {
    super(props);
    this.state = {
      name: " " 
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app" >
        <div className="app__header">
          <Search handleInput={this.handleInputChange} />
           
            <div className="app__main "> 

              
              <CurrentWeather />
              <SayHi />
              <SayHello color="black" name={this.state.name} />
              <FullDay /> 
            </div>
        </div>
      </div>
    );
  }
}

export default App;
