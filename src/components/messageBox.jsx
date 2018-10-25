import React, { Component } from "react";
import MessageItem from "./messageItem";
class MessageBox extends Component {
  render() {
    const { messages } = this.props;
    let location = true;
    return (
      <ul class="messages">
        {messages.map(item => {
          location = !location;
          return (
            <MessageItem location={location ? "left" : "right"} text={item} />
          );
        })}
      </ul>
    );
  }
}

export default MessageBox;
