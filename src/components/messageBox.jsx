import React, { Component } from "react";
import MessageItem from "./messageItem";
class MessageBox extends Component {
  render() {
    const { messages } = this.props;
    let location = true;
    return (
      <ul className="messages">
        {messages.map(item => {
          location = !location;
          return (
            <MessageItem
              key={item._id}
              location={location ? "left" : "right"}
              text={item.text}
            />
          );
        })}
      </ul>
    );
  }
}

export default MessageBox;
