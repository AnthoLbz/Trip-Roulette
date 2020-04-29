import React from "react";
import "./wheel.css";


class Wheel extends React.Component {
  state = {
    name: "circle",
  };
  startRotation = () => {
    this.setState({
      name: "circle start-rotate",
    });
    setTimeout(() => {
      this.setState({
        name: "circle start-rotate stop-rotate",
      });
    }, Math.floor(Math.random() * 10000) + 1);
  };
  render() {
    return (
      <div className="App">
        <div className="arrow"></div>
        <ul className={this.state.name}>
          <li>
            <div className="text" contentEditable="true" spellCheck="false">
              Beach
            </div>
          </li>
          <li>
            <div className="text" contentEditable="true" spellCheck="false">
              Jackpot
            </div>
          </li>
          <li>
            <div className="text" contentEditable="true" spellCheck="false">
              Forest
            </div>
          </li>
          <li>
            <div className="text" contentEditable="true" spellCheck="false">
              Mountain
            </div>
          </li>
          <li>
            <div className="text" contentEditable="true" spellCheck="false">
              Hell
            </div>
          </li>
          <li>
            <div className="text" contentEditable="true" spellCheck="false">
              Underwater
            </div>
          </li>
          <li>
            <div className="text" contentEditable="true" spellCheck="false">
              City
            </div>
          </li>
          <li>
            <div className="text" contentEditable="true" spellCheck="false">
              Landscape
            </div>
          </li>
          <li>
            <div className="text" contentEditable="true" spellCheck="false">
              Beach
            </div>
          </li>
          <li>
            <div className="text" contentEditable="true" spellCheck="false">
              Mountain
            </div>
          </li>
          <li>
            <div className="text" contentEditable="true" spellCheck="false">
              Hell
            </div>
          </li>
          <li>
            <div className="text" contentEditable="true" spellCheck="false">
              Forest
            </div>
          </li>
        </ul>
        <button className="spin-button" onClick={this.startRotation}>
          Spin
        </button>
      </div>
    );
  }
}

export default Wheel;
