import React, { Component } from "react";

export default class BoilingVerdict extends Component {
  render() {
    if (this.props.Temperature > 100) return <p>The water would boil.</p>;
    return <p>The water would not boil.</p>;
  }
}
