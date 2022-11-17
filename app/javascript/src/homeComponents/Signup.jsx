import React from "react";
import { createUser, signInUser } from "../../utils/request";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      username: "",
      loginErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, password, username } = this.state;

    createUser(username, email, password, 
      function(data) { 
        signInUser(username, password, function(data) {
          window.location.href = '/feed'
        })
    })
  }
    


  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="new-to-t">
            <p><strong>New to Twitter?</strong><span> Sign Up</span></p>
          </div>

          <input
            className="form-control mb-3"
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />

          <input
            className="form-control mb-3"
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input
            className="form-control mb-3"
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <button id="sign-up-btn" className="btn float-end">Sign up for Twitter</button>

        </form>
        
      </>
    );
  }
}