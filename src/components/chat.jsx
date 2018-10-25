import React, { Component } from "react";
import MessageBox from "./messageBox";
class Chat extends Component {
  messages = ["salam", "khooobi ?yaaaaaaaaaaaaaaaaaa khooobi ?yaaaaaaaaaaaaaaaaaa khooobi ?yaaaaaaaaaaaaaaaaaa khooobi ?yaaaaaaaaaaaaaaaaaakhooobi ?yaaaaaaaaaaaaaaaaaa khooobi ?yaaaaaaaaaaaaaaaaaa khooobi ?yaaaaaaaaaaaaaaaaaa khooobi ?yaaaaaaaaaaaaaaaaaa","salam","yohooo", "khooobi ?yaaaaaaaaaaaaaaaaaa khooobi ?yaaaaaaaaaaaaaaaaaa khooobi ?yaaaaaaaaaaaaaaaaaa khooobi ?yaaaaaaaaaaaaaaaaaakhooobi ?yaaaaaaaaaaaaaaaaaa khooobi ?yaaaaaaaaaaaaaaaaaa khooobi ?yaaaaaaaaaaaaaaaaaa khooobi ?yaaaaaaaaaaaaaaaaaa"];
  render() {
    return (
      <div>
        <div class="chat_window">
          <div class="top_menu">
            <div class="buttons">
              <div class="button close" />
              <div class="button minimize" />
              <div class="button maximize" />
            </div>
            <div class="title">Chat</div>
          </div>
          <MessageBox messages={this.messages} />
          <div class="bottom_wrapper clearfix">
            <div class="message_input_wrapper">
              <input
                class="message_input"
                placeholder="Type your message here..."
              />
            </div>
            <div class="send_message">
              <div class="icon" />
              <div class="text">Send</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
