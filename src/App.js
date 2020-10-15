import React, { Component } from "react";
import CurrentWeather from "./components/CurrentWeather"
import Search from "./components/Search";
import FullDay from "./components/FullDay";
import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";




const YOUR_API_KEY ="7ea2b8c1a7e76f716795bd42a668bcfa ";
class App extends Component {
 
 constructor(props) {
    super(props);
    this.state = {
      name: " " 
    };
  }
  getWeather= async (e)=>{
    e.preventDefault()
    const city=e.target.element.city.value;
    const api=await fetch("http://api.openweathermap.org/data/2.5/forecast?q=${CITY_NAME}&cnt=8&units=metric&appid=${YOUR_API_KEY}")
    const data=await api.json() 
    console.log(data);
  
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app" >
        <div className="app__header">
          <Search handleInput={this.handleInputChange} getWeather={this.getWeather} />
           
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
