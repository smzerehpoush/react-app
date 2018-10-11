import React, { Component } from "react";
import Pagination from "./common/pagination";
import MoviesTable from "./moviesTable";
import { getMovies } from "../services/fakeMovieServices";
import { getGenres } from "../services/fakeGenreServices";
import _ from "lodash";
import paginate from "../utils/paginate";
import ListGroup from "./common/listGroup";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" }
  };
  componentDidMount() {
    const genres = [
      { genre: "All Genres", _id: "allGenres", key: "allGenres" },
      ...getGenres()
    ];
    this.setState({ movies: getMovies(), genres });
  }
  handleDelete = id => {
    const movies = this.state.movies.filter(m => m._id !== id);
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
    const { currentGenre } = this.state;
    this.setState({
      currentPage: 1,
      currentGenre: currentGenre === item ? undefined : item
    });
  };
  handleSort = path => {
    const { sortColumn } = this.state;
    console.log("before", sortColumn.order);
    if (sortColumn.path === path) {
      console.log(path);
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.order = "asc";
      sortColumn.path = path;
    }
    console.log("after", sortColumn.order);
    this.setState({ sortColumn });
  };
  getCurrentPage = pages => {
    let { currentPage } = this.state;
    return pages.indexOf(currentPage) === -1
      ? (currentPage = pages[0])
      : currentPage;
  };

  filterMoviesByGenre = movies => {
    let counter = 0;
    const { currentGenre } = this.state;
    return currentGenre === undefined || currentGenre._id === "allGenres"
      ? movies.map(element => {
          element.row = ++counter;
          return element;
        })
      : movies.filter(m => m.genre === currentGenre.genre).map(element => {
          element.row = ++counter;
          return element;
        });
  };
  render() {
    const {
      pageSize,
      movies: allMovies,
      genres,
      currentGenre,
      sortColumn
    } = this.state;
    const filteredMovies = this.filterMoviesByGenre(allMovies);
    let pagesCount = filteredMovies.length / pageSize;
    const pages = (_.pages = _.range(1, pagesCount + 1));
    console.log(sortColumn);
    let sortedMovies = _.sortBy(filteredMovies, [sortColumn.path]);
    if (sortColumn.order === "desc") sortedMovies.reverse();
    const currentPage = this.getCurrentPage(pages);
    const movies = paginate(sortedMovies, currentPage, pageSize);

    return movies.length === 0 ? (
      "No Data To Show!"
    ) : (
      <div>
        <div className="row m-4">
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
            <MoviesTable
              onDelete={this.handleDelete}
              onLike={this.handleLike}
              movies={movies}
              onSort={this.handleSort}
            />
          </div>
        </div>
        <div className="row m-4">
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

export default Movies;
