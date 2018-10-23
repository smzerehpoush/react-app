import React, { Component } from "react";
class NavBar extends Component {
  render() {
    const { items, activeItem, onSelect } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand clickable">Vidly</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            {items.map(item => (
              <li
                className={
                  "nav-item " + (item._id === activeItem ? "active" : "")
                }
              >
                <a
                  className="nav-link clickable"
                  onClick={() => onSelect(item._id)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
