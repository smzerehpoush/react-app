import React, { Component } from "react";
class Counter extends Component {
  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  render() {
    let badgeClasses = "badge m-2 badge-";
    badgeClasses += this.props.counter.value === 0 ? "warning" : "primary";
    let buttonClasses = "btn btn-secondary btn-sm m-2 ";
    buttonClasses += this.props.counter.value === 0 ? " disabled" : " ";
    // buttonClasses += 0;
    return (
      <div className="row">
        <div className="col-2 m-2">
          <span style={this.styles} className={badgeClasses}>
            {this.formatCount()}
          </span>
        </div>
        <div className="col m-2">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <a
            // href="#"
            onClick={() => this.props.onDecrement(this.props.counter)}
            className={buttonClasses}
            role="button"
          >
            -
          </a>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            X
          </button>

          <br />
        </div>
      </div>
    );
  }
  formatCount() {
    const count = this.props.counter.value;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
