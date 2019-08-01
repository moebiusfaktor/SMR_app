import React from "react";
import "./App.css";
import Search from "./container/Search";
import NavBar from "./components/NavBar";
import Login from "./container/Login";
import Signup from "./container/Signup";
import Rating from "./container/Rating";
import Profile from "./container/Profile";
import RatingSlider from "./components/RatingSlider";
import Scales from "./components/Scales";
import Radar from "./components/Radar";
import BestList from "./components/Bestlist";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  state = {
    user: this.props.user
  };

  setUser = user => {
    this.setState({
      user: user
    });
  };
  render() {
    console.log(this.state.user);
    return (
      <div className="App">
        <Router>
          <NavBar user={this.state.user} setUser={this.setUser} />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route
              path="/Login"
              render={props => (
                <Login
                  {...props}
                  user={this.state.user}
                  setUser={this.setUser}
                />
              )}
            />
            <Route
              path="/Signup"
              render={props => (
                <Signup
                  {...props}
                  user={this.state.user}
                  setUser={this.setUser}
                />
              )}
            />
            <Route
              path="/Rating/:id"
              render={props => (
                <Rating
                  {...props}
                  user={this.state.user}
                  setUser={this.setUser}
                />
              )}
            />
            <Route
              path="/bestlist"
              render={props => (
                <BestList
                  {...props}
                  user={this.state.user}
                  setUser={this.setUser}
                />
              )}
            />
            <Route
              path="/Profile"
              render={props => <Profile user={this.state.user} {...props} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
