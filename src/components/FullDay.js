import React ,{ Component } from "react";
import "./FullDay.css";
import SayHi, { SayHello } from "./WeatherItem";
import storm from "../img/weather-icons/storm.svg";
export default class FullDay extends Component{

    constructor(props) {
        super(props);
        this.state = {
          name: " " 
        };
      }

    render(){
            return(
            
                <div className="fullDay">
                     <div className="hour">
              <img src={storm} width="100" height="100" alt="storm icon" />
              <SayHello  color="black" name={this.state.name} />
              
            </div>
            <div className="hour">
              <SayHello  color="black" name={this.state.name} />
            </div>
            <div className="hour">
              <SayHello  color="black" name={this.state.name} />
            </div>
            <div className="hour">
              <SayHello  color="black" name={this.state.name} />
            </div>
            <div className="hour">
              <SayHello  color="black" name={this.state.name} />
            </div>
            <div className="hour">
              <SayHello  color="black" name={this.state.name} />
            </div>
            <div className="hour">
              <SayHello  color="black" name={this.state.name} />
            </div>

                </div>


            )
    }
}

