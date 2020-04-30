import React from "react";
import "./wheel.css";
import {Link} from 'react-router-dom'

class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
    };
    this.selectItem = this.selectItem.bind(this);
  }

  selectItem() {
    if (this.state.selectedItem === null) {
      const selectedItem = Math.floor(Math.random() * this.props.items.length);
      if (this.props.onSelectItem) {
        this.props.onSelectItem(selectedItem);
      }
      this.setState({ selectedItem });
    } else {
      this.setState({ selectedItem: null });
      setTimeout(this.selectItem, 500);
    }
  };
  
  render() {
    const { selectedItem } = this.state;
    const { items } = this.props;

    const wheelVars = {
      "--nb-item": items.length,
      "--selected-item": selectedItem,
    };
    const spinning = selectedItem !== null ? "spinning" : "";
    const places = [
      "Mountain",
      "Forest",
      "Landscape",
      "Heaven",
      "Beach",
      "City",
      "Hell",
    ];

    return (
      <div className="wheel-container">
        <div
          className={`wheel ${spinning}`}
          style={wheelVars}
          onClick={this.selectItem}
        >
          {items.map((item, index) => (
          <Link to={{
              pathname : '/',
              state : {test : this.state.selectedItem}
            }}>
                <div
                className="wheel-item"
                key={index}
                style={{ "--item-nb": index }}
              >
                {item}
              </div>
          </Link>
          ))}
        </div>
        <Link to={{
              pathname : '/travel',
              state : {test : this.state.selectedItem}
            }}><h2>{places[this.state.selectedItem]}</h2></Link>
      </div>
    );
  }
}

export default Wheel
