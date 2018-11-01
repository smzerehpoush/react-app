import React, { Component } from "react";
import MessageBox from "./messageBox";
class Chat extends Component {
  state = { messages: [] };
  message = React.createRef();

  handleSubmitMessage = e => {
    e.preventDefault();
    const message = { text: this.message.current.value, _id: Date.now() };
    const messages = [...this.state.messages, message];
    this.setState({ messages });
    this.message.current.value = null;
  };
  render() {
    return (
      <form onSubmit={this.handleSubmitMessage}>
        <div className="chat_window">
          <div className="top_menu">
            <div className="buttons">
              <div className="button minimize" />
              <div className="button maximize" />
              <div className="button close" />
            </div>
            <div className="title">Chat</div>
          </div>
          <MessageBox messages={this.state.messages} />
          <div className="bottom_wrapper clearfix">
            <div className="message_input_wrapper">
              <input
                autoFocus
                ref={this.message}
                type="text"
                id="messageInput"
                className="message_input"
                placeholder="Type your message here..."
              />
            </div>
            <button className="send_message">
              <div className="icon" />
              <div className="text">Send</div>
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Chat;
