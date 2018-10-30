import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import Select from "react-select";
import { getNewMovieId, getMovie } from "../services/fakeMovieServices";

class MovieForm extends Form {
  state = {
    data: { title: "", stock: "", rate: "", genre: "" },
    errors: {}
  };

  schema = {
    title: Joi.string()
      .required()
      .label("Title"),
    genre: Joi.string()
      .required()
      .label("Gnere"),
    stock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number In Stock"),
    rate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Rate")
  };

  doSubmit = () => {
    const movieId = this.props.match.params.id;
    const { data, selectedOption } = this.state;
    const movie = {
      _id: movieId || getNewMovieId(),
      title: data.title,
      name: data.title,
      genre: data.genre || selectedOption.label,
      liked: "false",
      numberInStock: data.stock,
      dailyRentalRate: data.rate
    };
    console.log("movie to be add ", movie);
    const { onAddMovie } = this.props;
    onAddMovie(movie);
    this.props.history.push("/movies");
  };
  handleSelectChange = selectedOption => {
    const data = { ...this.state.data };
    console.log("selectedOption", selectedOption);
    data.genre = selectedOption.label;

    this.setState({ selectedOption, data });
  };
  componentDidMount() {
    const movieId = this.props.match.params.id;
    if (movieId) {
      const movie = getMovie(movieId);
      const data = { ...this.state.data };
      data.title = movie.title;
      data.stock = movie.numberInStock;
      data.genre = movie.genre;
      data.rate = Math.ceil(movie.dailyRentalRate);
      this.setState({ data });
    }
  }
  render() {
    const { selectedOption } = this.state;
    const { genres } = this.props;
    const options = genres.map(genre => ({
      value: genre._id,
      label: genre.genre
    }));

    return (
      <div className="m-4">
        <h1>Add Movie</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          <p>Genre</p>
          <Select
            name="genre"
            value={selectedOption}
            onChange={this.handleSelectChange}
            options={options}
            placeholder="Genre"
          />
          <br />
          {this.renderInput("stock", "Number In Stock", "number")}
          {this.renderInput("rate", "Rate", "number")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
