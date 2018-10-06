import React, { Component } from "react";
import { getMovies, deleteMovie } from "../fakeServices";
import "bootstrap/dist/css/bootstrap.css";

class Movie extends Component {
  state = {
    movies: getMovies()
  };
  handleDelete = id => {
    deleteMovie(id);
    this.setState((state, props) => {
      return {
        movies: this.state.movies.filter(m => m._id !== id)
      };
    });
  };
  render() {
    const count = this.state.movies.length;
    if (count === 0) {
      return <p>There are no movies in table</p>;
    }
    return (
      <React.Fragment>
        <p>showing {count} movies in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie._id)}
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

export default Movie;
