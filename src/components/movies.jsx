import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import Like from "./common/like";
class Movies extends Component {
  render() {
    const count = this.props.movies.length;
    if (count === 0) {
      return <p>There are no movies in table</p>;
    }
    return (
      <React.Fragment>
        <p>showing {count} movies in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Row</th>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie._id}</td>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.props.onLike(movie._id)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.props.onDelete(movie._id)}
                    className="btn btn-danger btn-sm"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
