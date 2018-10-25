import React, { Component } from "react";

class MessageItem extends Component {
  render() {
    const { location, text } = this.props;
    return (
      <div>
        <li className={"message appeared " + (location ? location : "right")}>
          <div className="text_wrapper">
            <div className="text">{text}</div>
          </div>
        </li>
      </div>
    );
  }
}

export default MessageItem;
