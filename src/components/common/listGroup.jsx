import React, { Component } from "react";
class ListGroup extends Component {
  render() {
    const { items, onItemSelect, activeItem } = this.props;
    return (
      <ul className="list-group">
        {items.map(item => (
          <a
            key={item._id}
            className={
              "list-group-item list-group-item-action m-1" +
              (item._id === activeItem ? " active" : "")
            }
            onClick={() => onItemSelect(item)}
          >
            {item.value}
          </a>
        ))}
      </ul>
    );
  }
}

export default ListGroup;
