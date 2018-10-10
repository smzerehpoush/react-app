import React, { Component } from "react";
import Pagination from "./common/pagination";
import Movies from "./movies";
import { getMovies } from "../fakeServices";
import _ from "lodash";
import paginate from "../utils/paginate";

class Vidly extends Component {
  state = {
    movies: getMovies(),
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
  getCurrentPage = pages => {
    let { currentPage } = this.state;
    return pages.indexOf(currentPage) === -1
      ? (currentPage = pages[0])
      : currentPage;
  };
  render() {
    const { pageSize, movies: allMovies } = this.state;
    let pagesCount = allMovies.length / pageSize;
    const pages = (_.pages = _.range(1, pagesCount + 1));

    const currentPage = this.getCurrentPage(pages);
    const movies = paginate(allMovies, currentPage, pageSize);

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
      </React.Fragment>
    );
  }
}

export default Vidly;
