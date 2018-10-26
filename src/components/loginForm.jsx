import React, { Component } from "react";
import Input from "./common/input";
class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {
      username: "",
      password: ""
    }
  };
  validate = () => {
    const errors = {};
    const { account } = this.state;
    if (account.username.trim().length === 0)
      errors.username = "Username is required!";
    if (account.password.trim().length === 0)
      errors.password = "Password is required!";
    return errors;
    // return Object.keys(errors).length === 0 ? null : errors;
  };
  validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim().length === 0) return "username is required!";
    } else if (name === "password") {
      if (value.trim().length === 0) return "password is required!";
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors });
  };
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    account[input.name] = input.value;
    this.setState({ account, errors });
  };
  componentDidMount() {}
  render() {
    const { account, errors } = this.state;
    return (
      <div className="m-5">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={account.username}
            onChange={this.handleChange}
            errorMessage={errors.username}
          />
          <Input
            name="password"
            label="Password"
            value={account.password}
            onChange={this.handleChange}
            type="password"
            errorMessage={errors.password}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
