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
    movies: [],
    genres: [],
    pageSize: 2,
    currentPage: 1
  };
  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }
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

  filterMoviesByGenre = movies => {
    const { currentGenre } = this.state;
    return currentGenre === undefined || currentGenre._id === "allGenres"
      ? movies
      : movies.filter(m => m.genre === currentGenre.genre);
  };
  render() {
    const { pageSize, movies: allMovies, genres, currentGenre } = this.state;
    let movies = this.filterMoviesByGenre(allMovies);
    let pagesCount = movies.length / pageSize;
    const pages = (_.pages = _.range(1, pagesCount + 1));

    const currentPage = this.getCurrentPage(pages);
    movies = paginate(movies, currentPage, pageSize);

    return movies.length === 0 ? (
      "No Data To Show!"
    ) : (
      <div className="row p-2">
        <div className="col-3">
          <ListGroup
            items={genres}
            idProperty="_id"
            valueProperty="genre"
            activeItem={currentGenre === undefined ? "" : currentGenre._id}
            onItemSelect={this.handleItemSelect}
          />
        </div>
        <div className="col">
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
        </div>
      </div>
    );
  }
}

export default Vidly;
