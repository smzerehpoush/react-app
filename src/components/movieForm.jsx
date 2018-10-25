import React, { Component } from "react";
class MovieForm extends Component {
  handleSave = () => {
    this.props.history.push("/movies");
  };
  render() {
    return (
      <div>
        <h1> Movie {this.props.match.params.id}</h1>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={this.handleSave}
        >
          save
        </button>
      </div>
    );
  }
}

export default MovieForm;
