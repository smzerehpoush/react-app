import React, { Component } from "react";
class NavBar extends Component {
  render() {
    const { countersCount } = this.props;
    return (
      <nav className="navbar navar-light bg-light">
        <a className="navbar-brand ">
          NavBar
          <span className="badge badge-pill badge-secondary">
            {countersCount}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
