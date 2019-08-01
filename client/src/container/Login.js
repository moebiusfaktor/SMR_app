import React, { Component } from "react";
import { login } from "../services/api.js";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    error: ""
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    const { username, password } = this.state;

    event.preventDefault();

    login(username, password)
      .then(data => {
        this.props.setUser(data);
        this.props.history.push("/");
      })
      .catch(err => {
        this.setState({ error: err.response.data.message });
      });
  };

  render() {
    return (
      <div className="login-page">
        <img className="big-logo" src="/images/SMR_logo_tag.png" />
        <div className="login-form">
          <Form className="login-input" onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="username">Username:</Form.Label>
              <Form.Control
                type="text"
                name="username"
                id="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="password">Password:</Form.Label>
              <Form.Control
                type="password"
                name="password"
                id="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Form.Group>

            {this.state.error && (
              <Alert variant="warning">{this.state.error}</Alert>
            )}

            <Button type="submit">Login</Button>
            <p class="account-message">
              Don't have an account yet?<Link to="/Signup">Sign up</Link>
            </p>
          </Form>
        </div>
      </div>
    );
  }
}
