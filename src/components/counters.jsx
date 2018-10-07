import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { onDelete, onIncrement, onDecrement, onReset } = this.props;
    return (
      <React.Fragment>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          <h3>Reset</h3>
        </button>
        <br />
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
