import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { getMovies } from "../services/fakeMovieServices";
import { getGenres } from "../services/fakeGenreServices";
import Movies from "./movies";
import NavBar from "./common/navbar";
import Customers from "./customers";
import Rentals from "./rentals.";
import MovieForm from "./movieForm";
import NotFound from "./notFound";
import LoginForm from "./loginForm";
import Chat from "./chat";
import RegisterForm from "./registerForm";
import AddMovie from "./addMovie";

class Vidly extends Component {
  state = {
    movies: [],
    genres: []
  };

  componentDidMount() {
    const genres = [
      { genre: "All Genres", _id: "allGenres", key: "allGenres" },
      ...getGenres()
    ];
    this.setState({ movies: getMovies(), genres });
  }

  handleSelect = activeItem => {
    this.setState({ activeItem });
  };
  handleAddMovie = movie => {
    const movies = [...this.state.movies];
    movies.push(movie);
    this.setState({ movies });
  };
  handleDelete = id => {
    const dbMovies = [...this.state.movies];

    const movies = dbMovies.filter(m => m._id !== id);
    this.setState({
      movies
    });
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
    const items = [
      { _id: 1, name: "Movies", path: "/movies" },
      { _id: 2, name: "Customers", path: "/customers" },
      { _id: 3, name: "Rentals", path: "/rentals" },
      { _id: 4, name: "Chat", path: "/chat" },
      { _id: 5, name: "Login", path: "/login" },
      { _id: 6, name: "Register", path: "/register" }
    ];
    const { movies, genres } = this.state;
    const { activeItem } = this.state;
    return (
      <div>
        <NavBar
          items={items}
          onSelect={this.handleSelect}
          activeItem={activeItem}
        />
        <div>
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route
              path="/movies/new"
              render={props => (
                <AddMovie
                  {...props}
                  genres={genres}
                  onAddMovie={this.handleAddMovie}
                />
              )}
            />
            <Route path="/movies/:id" component={MovieForm} />
            <Route
              path="/movies"
              render={() => (
                <Movies
                  movies={movies}
                  genres={genres}
                  onLike={this.handleLike}
                  onDelete={this.handleDelete}
                />
              )}
            />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/chat" component={Chat} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Vidly;
