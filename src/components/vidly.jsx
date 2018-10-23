import React, { Component } from "react";
import Movies from "./movies";
import NavBar from "./common/navbar";
class Vidly extends Component {
  state = {};
  handleSelect = activeItem => {
    this.setState({ activeItem });
  };
  render() {
    const items = [
      { _id: 1, name: "Movies" },
      { _id: 2, name: "Customers" },
      { _id: 3, name: "Rentals" }
    ];
    const { activeItem } = this.state;
    return (
      <React.Fragment>
        <NavBar
          items={items}
          onSelect={this.handleSelect}
          activeItem={activeItem}
        />
        <Movies />
      </React.Fragment>
    );
  }
}

export default Vidly;
