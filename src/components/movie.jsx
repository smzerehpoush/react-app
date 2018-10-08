import React, { Component } from "react";
import { getMovies } from "../fakeServices";
import "bootstrap/dist/css/bootstrap.css";
import Like from "./common/like";
class Movie extends Component {
  state = {
    movies: getMovies()
  };
  handleDelete = movie => {
    this.setState(state => ({
      movies: state.movies.filter(m => m._id !== movie._id)
    }));
  };
  handleLike = id => {
    const movies = this.state.movies;
    movies.forEach(element => {
      if (element._id === id) {
        element.liked = element.liked === "true" ? "false" : "true";
      }
    });
    this.setState({
      movies
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
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie._id)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
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
