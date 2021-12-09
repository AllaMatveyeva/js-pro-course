import React from "react";
import "./kliker.scss";
export class Kliker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numPlus: 0,
      numMinus: 0,
    };
  }

  handleClick(arg, num) {
    this.setState((prevState) => ({ [num]: prevState[num] + arg }));
  }

  handleClickDrop = () => {
    this.setState((state) => {
      Object.keys(state).forEach(function (num) {
        if (num === "numPlus" || num === "numMinus") {
          state[num] = 0;
        }
      });
      return state;
    });
  };

  render() {
    return (
      <div className="kliker">
        <div className="kliker__buttons">
          <button
            className="kliker__button kliker__button_plus"
            onClick={(e) => this.handleClick(+1, "numPlus")}
          >
            (+) {this.state.numPlus}
          </button>
          <button
            className="kliker__button kliker__button_drop"
            onClick={(e) => this.handleClickDrop()}
          >
            dropping
          </button>
          <button
            className="kliker__button kliker__button_minus"
            onClick={() => this.handleClick(-1, "numMinus")}
          >
            (-) {this.state.numMinus}
          </button>
        </div>
      </div>
    );
  }
}
