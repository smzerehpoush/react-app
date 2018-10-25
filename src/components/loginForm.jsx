import React, { Component } from "react";
class LoginForm extends Component {
  username = React.createRef();
  //   password = React.createRef();
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.username.current.value);

    console.log("submitted");
  };
  componentDidMount() {
    this.username.current.focus();
  }
  render() {
    return (
      <div className="m-5">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              autoFocus
              ref={this.username}
              type="text"
              className="form-control"
              id="username"
            />
            {/* <small id="emailHelp" className="form-text text-muted">
              we'll never share your information
            </small> */}
          </div>
          <div className="form-group">
            <label htmlFor="passwordInput">Password</label>
            <input
              ref={this.password}
              type="Password"
              className="form-control"
              id="passwordInput"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
