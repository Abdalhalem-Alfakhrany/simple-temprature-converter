import React, { Component } from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

export default class TemperatureInput extends Component {
  handelcahange = (e) => {
    const newTemp =
      this.props.scale === "f" ? toFahrenheit(e.target.value) : e.target.value;
    this.props.onchange(newTemp);
  };
  render() {
    const Temperature =
      this.props.scale === "f"
        ? toFahrenheit(this.props.temperature)
        : this.props.temperature;
    return (
      <fieldset>
        <legend>Enter The Tempreter in{scaleNames[this.props.scale]} </legend>
        <input value={Temperature} onChange={this.handelcahange} />
      </fieldset>
    );
  }
}
