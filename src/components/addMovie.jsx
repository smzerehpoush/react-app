import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import Select from "react-select";
import { getNewMovieId } from "../services/fakeMovieServices";
import { getGenre } from "../services/fakeGenreServices";

class AddMovie extends Form {
  state = {
    data: { title: "", stock: "", rate: "" },
    errors: {}
  };

  schema = {
    title: Joi.string()
      .required()
      .label("Title"),
    // genre: Joi.string()
    //   .required()
    //   .label("Genre"),
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
    const { data, selectedOption } = this.state;
    console.log("selectedOpetion", selectedOption);
    const movie = {
      _id: getNewMovieId(),
      title: data.title,
      name: data.title,
      genre: getGenre(selectedOption.value).genre,
      liked: "false",
      numberInStock: data.stock,
      dailyRentalRate: data.rate
    };

    const { onAddMovie } = this.props;
    console.log("testtttttttt", movie);
    onAddMovie(movie);
    this.props.history.push("/movies");
  };
  handleSelectChange = selectedOption => {
    this.setState({ selectedOption });
  };
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

export default AddMovie;
