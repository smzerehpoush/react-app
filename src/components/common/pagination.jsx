import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import PropTypes from "prop-types";
class Pagination extends Component {
  render() {
    const { pages, currentPage } = this.props;
    return (
      <React.Fragment>
        <nav className="m-2">
          <ul className="pagination">
            {pages.length === 1
              ? ""
              : pages.map(page => (
                  <li
                    className={
                      "page-item " + (page === currentPage ? " active" : "")
                    }
                    key={page}
                  >
                    <a
                      className="page-link"
                      onClick={() => this.props.onPageChange(page)}
                    >
                      {page}
                    </a>
                  </li>
                ))}
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Pagination;
