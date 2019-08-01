import React, { Component } from "react";
import axios from "axios";

export default class Profile extends Component {
  state = {
    movies: [],
    sort: "directing"
  };

  componentDidMount() {
    if (!this.props.user) return this.props.history.push("/login");
    axios.get(`/api/ratedMovies/user/${this.props.user._id}`).then(response => {
      const movies = response.data;
      this.setState({ movies });
    });
  }

  handleSort = sort => {
    this.setState({ sort });
  };

  render() {
    return (
      <div style={{ marginTop: "100px" }}>
        <div>
          <button onClick={() => this.handleSort("directing")}>
            Directing
          </button>
          <button onClick={() => this.handleSort("writing")}>Writing</button>
          <button onClick={() => this.handleSort("editing")}>Editing</button>
          <button onClick={() => this.handleSort("cameraWork")}>
            Camera Work
          </button>
          <button onClick={() => this.handleSort("lighting")}>Lighting</button>
          <button onClick={() => this.handleSort("acting")}>Acting</button>
        </div>
        {[...this.state.movies]
          .sort((a, b) => b[this.state.sort] - a[this.state.sort])
          .map(movie => (
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster}`}
                alt=""
              />
              <p>{movie.title}</p>
              <p>{movie[this.state.sort]}</p>
            </div>
          ))}
      </div>
    );
  }
}
