import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { getMovies, saveMovie } from "./services/fakeMovieService";
import { getGenres } from "./services/fakeGenreService";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import Customers from "./components/customers";
import Rentals from "./components/rentals.";
import NotFound from "./components/notFound";
import LoginForm from "./components/loginForm";
import Chat from "./components/chat";
import RegisterForm from "./components/registerForm";
import MovieForm from "./components/movieForm";

class App extends Component {
  state = {
    movies: [],
    genres: []
  };

  componentDidMount() {
    const genres = [
      { name: "All Genres", _id: "5b21ca3eeb7f6fbccd471ff8", key: "allGenres" },
      ...getGenres()
    ];
    this.setState({ movies: getMovies(), genres });
  }

  handleItemSelect = activeItem => {
    this.setState({ activeItem });
  };
  handleAddMovie = movie => {
    saveMovie(movie);
    const movies = getMovies();
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
          onSelect={this.handleItemSelect}
          activeItem={activeItem}
        />
        <div>
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route
              path="/movies/:id"
              render={props => <MovieForm {...props} />}
            />
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

export default App;
