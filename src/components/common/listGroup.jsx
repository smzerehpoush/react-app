import React, { Component } from "react";
class ListGroup extends Component {
  render() {
    const {
      items,
      onItemSelect,
      activeItem,
      idProperty,
      valueProperty
    } = this.props;
    return (
      <ul className="list-group">
        <a
          key="allGenres"
          className={
            "list-group-item list-group-item-action m-1" +
            ("allGenres" === activeItem ? " active" : "")
          }
          onClick={() => onItemSelect({ _id: "allGenres" })}
        >
          All Genres
        </a>
        {items.map(item => (
          <a
            key={item[idProperty]}
            className={
              "list-group-item list-group-item-action m-1" +
              (item[idProperty] === activeItem ? " active" : "")
            }
            onClick={() => onItemSelect(item)}
          >
            {item[valueProperty]}
          </a>
        ))}
      </ul>
    );
  }
}

export default ListGroup;
