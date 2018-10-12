import React, { Component } from "react";
class TableHeader extends Component {
  raiseSort = path => {
    console.log(this.props);
    const { sortColumn, onSort } = this.props;
    console.log("before", sortColumn.order);
    if (sortColumn.path === path) {
      console.log(path);
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.order = "asc";
      sortColumn.path = path;
    }
    console.log("after", sortColumn.order);
    onSort(sortColumn);
  };
  renderSortIcon = column => {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path) return null;
    else return <i className={"m-2 fa fa-sort-" + sortColumn.order} />;
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => (
            <th
              className="clickable"
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.lable}
              {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
