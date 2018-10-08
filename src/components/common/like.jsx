import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";

class Like extends Component {
  render() {
    let likeClassName = "fa fa-heart";
    if (this.props.liked === "false") likeClassName += "-o";
    return (
      <i
        style={{ cursor: "pointer" }}
        onClick={this.props.onClick}
        className={likeClassName}
        aria-hidden="true"
      />
    );
  }
}

export default Like;
