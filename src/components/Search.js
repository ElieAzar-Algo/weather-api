import React from "react";

import clear from "../img/weather-icons/clear.svg";
import "./Search.css";




class Search extends React.Component {
  state = {
    input: ""
  };
  handleInput=()=>{
    

  }


  render() {
    return (
      <div>
        {/* {this.state.input} */}
        
        <input
        name="city"
          type="text"
          id="input-name"
          placeholder="Type in a city name"
          
          onChange={event => {
            this.setState({ input: event.target.value });
          }}
        />
        <div className="search-btn">
        <button name="city" 
          onClick={event => {
            this.props.handleInput(this.state.input);
            
            
          }}
        >
          FIND WEATHER
        </button>
        </div>
      </div>
    );
  }
}
export default Search;
