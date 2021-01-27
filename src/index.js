import ReactDOM from "react-dom";
import React, { Component } from "react";
import BoilingVerdict from "./components/boiling_verdict.js";
import TemperatureInput from "./components/temperature_input.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 0,
    };
  }

  handelchange = (newtemperature) => {
    this.setState({ temperature: newtemperature });
  };

  render() {
    const Temp = this.state.temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={Temp}
          onchange={this.handelchange}
        />

        <TemperatureInput
          scale="f"
          temperature={Temp}
          onchange={this.handelchange}
        />

        <BoilingVerdict Temperature={parseFloat(Temp)} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
