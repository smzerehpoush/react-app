import React, { Component } from "react";
import Like from "./common/like";
import Table from "./common/table";
import { Link } from "react-router-dom";
class MoviesTable extends Component {
  columns = [
    { path: "row", lable: "row" },
    {
      lable: "Title",
      path: "title",
      content: movie => <Link to={`/movies/${movie._id}`}>{movie.title} </Link>
    },
    { path: "genre", lable: "Genre" },
    { path: "numberInStock", lable: "Stock" },
    { path: "dailyRentalRate", lable: "Rate" },
    {
      key: "like",
      content: movie => (
        <Like
          liked={movie.liked}
          onClick={() => this.props.onLike(movie._id)}
        />
      )
    },
    {
      key: "delete",
      content: movie => (
        <button
          onClick={() => this.props.onDelete(movie._id)}
          className="btn btn-danger btn-sm"
        >
          delete
        </button>
      )
    }
  ];
  render() {
    const { onSort, sortColumn, movies } = this.props;
    return movies.length === 0 ? (
      <p>There are no movies in table</p>
    ) : (
      <div>
        <p>There are {movies.length} movies in table</p>
        <Table
          columns={this.columns}
          data={movies}
          sortColumn={sortColumn}
          onSort={onSort}
        />
      </div>
    );
  }
}

export default MoviesTable;
