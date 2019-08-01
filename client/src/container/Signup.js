import React, { Component } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { signup } from "../services/api.js";
import "./Signup.css";

export default class Signup extends Component {
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

    signup(username, password)
      .then(data => {
        console.log(data);
        this.props.setUser(data);
        this.props.history.push("/");
      })
      .catch(err => {
        this.setState({ error: err.response.data.message });
      });
  };

  render() {
    return (
      <div className="signup-page">
        <div className="signup-form">
          <Form className="signup-input" onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                name="username"
                id="username"
                value={this.state.username}
                onChange={this.handleChange}
                placeholder="username"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                name="password"
                id="password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="email"
              />
            </Form.Group>

            {this.state.error && (
              <p style={{ color: "white" }}>{this.state.error}</p>
            )}

            <Button type="submit">Signup</Button>
          </Form>
        </div>
        <img className="big-logo-auth" src="/images/SMR_logo_tag.png" />
      </div>
    );
  }
}
