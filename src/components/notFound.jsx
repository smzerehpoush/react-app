import React, { Component } from "react";
class NotFound extends Component {
  handleClick = () => {
    this.props.history.push("/movies");
  };
  render() {
    return (
      <div>
        <h1> Not found</h1>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={this.handleClick}
        >
          return home page
        </button>
      </div>
    );
  }
}

export default NotFound;
