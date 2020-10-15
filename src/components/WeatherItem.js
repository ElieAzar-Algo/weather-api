import React, { Component } from "react";
import { render } from "react-dom";

export default class WeatherItem extends Component {
  render() {
    return <div>London</div>;
  }
}
export class SayHello extends Component {
  render() {
    return (
      <div >
        28C{this.props.name}
      </div>
    );
  }
}
