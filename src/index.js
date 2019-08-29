import React from "react";
import ReactDOM from "react-dom";
import { evaluate } from "mathjs";

import Button from "./button";
import Input from "./input";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      input: "",
      ops: [
        ["7", "8", "9", "/"],
        ["4", "5", "6", "*"],
        ["1", "2", "3", "+"],
        ["^", "0", ".", "-"]
      ]
    };
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  handleEqual = () => {
    this.setState({ input: evaluate(this.state.input) });
  };

  renderButtons = () => {
    return this.state.ops.map(row => {
      return (
        <div className="row">
          {row.map(digit => {
            return <Button handleClick={this.addToInput}>{digit}</Button>;
          })}
        </div>
      );
    });
  };

  render() {
    return (
      <div className="App">
        <Input input={this.state.input} />
        {this.renderButtons()}

        <div className="row">
          <Button
            label="clear"
            handleClick={() => this.setState({ input: "" })}
          >
            Clear
          </Button>
          <Button label="equal" handleClick={this.handleEqual}>
            =
          </Button>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
