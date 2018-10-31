import React, { Component } from "react";
import Pagination from "./common/pagination";
import MoviesTable from "./moviesTable";
import _ from "lodash";
import paginate from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { Link } from "react-router-dom";
class Movies extends Component {
  state = {
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" }
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  handleGenreSelect = genre => {
    const { currentGenre } = this.state;
    this.setState({
      currentPage: 1,
      currentGenre: currentGenre === genre ? undefined : genre
    });
  };
  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getCurrentPage = pages => {
    let { currentPage } = this.state;
    return pages.indexOf(currentPage) === -1
      ? (currentPage = pages[0])
      : currentPage;
  };

  filterMovies = movies => {
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
  sortMovies = (movies, sortColumn) => {
    let sortedMovies = _.sortBy(movies, [sortColumn.path]);
    if (sortColumn.order === "desc") sortedMovies.reverse();
    return sortedMovies;
  };
  getPagedData = () => {
    const { movies: allMovies } = this.props;
    const { pageSize, sortColumn } = this.state;
    const filteredMovies = this.filterMovies(allMovies);
    let pagesCount = filteredMovies.length / pageSize;
    const pages = (_.pages = _.range(1, pagesCount + 1));
    let sortedMovies = this.sortMovies(filteredMovies, sortColumn);
    const currentPage = this.getCurrentPage(pages);
    const movies = paginate(sortedMovies, currentPage, pageSize);
    return { movies, pages, currentPage };
  };
  render() {
    const { genres, onLike, onDelete } = this.props;
    const { currentGenre, sortColumn } = this.state;
    const { movies, pages, currentPage } = this.getPagedData();
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
            <Link
              className="btn btn-primary"
              to="/movies/new"
              style={{ marginBottom: 20 }}
            >
              New Movie
            </Link>
            <MoviesTable
              sortColumn={sortColumn}
              onDelete={onDelete}
              onLike={onLike}
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
