import React ,{Component} from "react";
import storm from "../img/weather-icons/storm.svg";

export default class CurrentWeather extends Component{
    

    render(){
        return(
          <div>
           <img src={storm} width="300" height="300" alt="storm icon" />
          </div>

        )
    }
}