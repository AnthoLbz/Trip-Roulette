import React from "react";
import Wheel from "./Wheel";
import "./launch.css";

class Launch extends React.Component {
  constructor() {
    super();
    this.places = [
      "Mountain",
      "Forest",
      "Landscape",
      "Heaven",
      "Beach",
      "City",
      "Hell",
    ];
  }

  render() {
    return (
      <div className="Launch">
        <h1>Where should we go today ?</h1>
        <Wheel items={this.places} />
        <h1> Click the wheel to spin !</h1>
        <switchToName/>
      </div>
    );
  }
}

export default Launch;
