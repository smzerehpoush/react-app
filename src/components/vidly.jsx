import React, { Component } from "react";
import Pagination from "./common/pagination";
import Movies from "./movies";
import { getMovies } from "../services/fakeMovieServices";
import { getGenres } from "../services/fakeGenreServices";
import _ from "lodash";
import paginate from "../utils/paginate";
import ListGroup from "./common/listGroup";
class Vidly extends Component {
  state = {
    movies: getMovies(),
    genres: getGenres(),
    pageSize: 2,
    currentPage: 1
  };
  handleDelete = id => {
    const movies = this.state.movies.filter(m => m._id !== id);
    console.log("before1", movies);
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
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  handleItemSelect = item => {
    this.setState({
      currentGenre: item
    });
  };
  getCurrentPage = pages => {
    let { currentPage } = this.state;
    return pages.indexOf(currentPage) === -1
      ? (currentPage = pages[0])
      : currentPage;
  };
  formatGenres = genres => {
    for (let i = 0; i < genres.length; i++) {
      if (genres[i].hasOwnProperty("genre")) {
        genres[i]["value"] = genres[i]["genre"];
        delete genres[i]["genre"];
      }
    }
    return genres;
  };
  filterMoviesByGenre = movies => {
    const { currentGenre } = this.state;
    return currentGenre === undefined
      ? movies
      : movies.filter(m => m.genre === currentGenre.value);
  };
  render() {
    const {
      pageSize,
      movies: allMovies,
      genres: allGenres,
      currentGenre
    } = this.state;
    let movies = this.filterMoviesByGenre(allMovies);
    let pagesCount = movies.length / pageSize;
    const pages = (_.pages = _.range(1, pagesCount + 1));

    const currentPage = this.getCurrentPage(pages);
    movies = paginate(movies, currentPage, pageSize);
    const genres = this.formatGenres(allGenres);

    return movies.length === 0 ? (
      "No Data To Show!"
    ) : (
      <React.Fragment>
        <Movies
          onDelete={this.handleDelete}
          onLike={this.handleLike}
          movies={movies}
        />
        <Pagination
          pages={pages}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
        <ListGroup
          items={genres}
          activeItem={currentGenre === undefined ? "" : currentGenre._id}
          onItemSelect={this.handleItemSelect}
        />
      </React.Fragment>
    );
  }
}

export default Vidly;
