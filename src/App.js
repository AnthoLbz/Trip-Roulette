import React from "react";
import ReactDOM from "react-dom";
import Wheel from "./components/Wheel";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.places = [
      "Mountain",
      "Forest",
      "Landscape",
      "Underwater",
      "Beach",
      "City",
      "Hell"
    ];
  }

  render() {
    return (
      <div className="App">
        <h1>Where should we go today ?</h1>
        <Wheel items={this.places} />
        <h1> Click the wheel to spin !</h1>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App