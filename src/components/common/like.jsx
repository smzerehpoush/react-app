import React, { Component } from "react";

class Like extends Component {
  render() {
    let likeClassName = "fa fa-heart";
    if (this.props.liked === "false") likeClassName += "-o";
    return (
      <i
        onClick={() => this.props.onClick()}
        className={likeClassName + " clickable"}
        aria-hidden="true"
      />
    );
  }
}

export default Like;
