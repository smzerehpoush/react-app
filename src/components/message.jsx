import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Message extends Component {
  state = { message: "salam" };
  render() {
    return (
      <React.Fragment>
        <span className="badge m-2 badge-primary">{this.state.message}</span>
      </React.Fragment>
    );
  }
}

export default Message;
