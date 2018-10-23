import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
class NavBar extends Component {
  render() {
    const { items, activeItem, onSelect } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand clickable" to="/">
          Vidly
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            {items.map(item => (
              <li
                key={item._id}
                className={
                  "nav-item " + (item._id === activeItem ? "active" : "")
                }
              >
                <NavLink
                  className="nav-item nav-link clickable"
                  to={`${item.path}`}
                  onClick={() => onSelect(item._id)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
