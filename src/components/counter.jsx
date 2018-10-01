import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0
  };
  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };
  handleIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };
  handleDecrement = () => {
    this.setState(prev => ({
      count: prev.count > 0 ? prev.count - 1 : prev.count
    }));
  };
  render() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return (
      <React.Fragment>
        <span style={this.styles} className={classes}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm m-2"
        >
          Decrement
        </button>
      </React.Fragment>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
