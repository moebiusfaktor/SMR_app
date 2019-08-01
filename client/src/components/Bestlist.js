import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Bestlist.css";

export default class Bestlist extends Component {
  state = {
    movies: [],
    sort: "directingAvg"
  };

  componentDidMount() {
    axios.get("/api/ratedMovies").then(response => {
      let avgMovieCats = response.data.map(movie => {
        return {
          ...movie,
          directingAvg: Math.round(movie.directingAvg * 10) / 10,
          writingAvg: Math.round(movie.writingAvg * 10) / 10,
          editingAvg: Math.round(movie.editingAvg * 10) / 10,
          cameraWorkAvg: Math.round(movie.cameraWorkAvg * 10) / 10,
          lightingAvg: Math.round(movie.lightingAvg * 10) / 10,
          actingAvg: Math.round(movie.actingAvg * 10) / 10,
          genreMeterAvg: Math.round(movie.genreMeterAvg * 10) / 10
        };
      });

      this.setState({ movies: avgMovieCats });
    });
  }

  handleSort = sort => {
    this.setState({ sort });
  };

  render() {
    return (
      <div>
        <div className="movie-container">
          {[...this.state.movies]
            .sort((a, b) => b[this.state.sort] - a[this.state.sort])
            .map(movie => (
              <div className="movie-card">
                <h3 className="title">{movie.title}</h3>
                <Link to={`/rating/${movie._id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster}`}
                    alt=""
                  />
                </Link>

                <h1 className="rate">{movie[this.state.sort]}</h1>
              </div>
            ))}
        </div>
        <div className="sort-button-container">
          <button onClick={() => this.handleSort("directingAvg")}>
            Directing
          </button>
          <button onClick={() => this.handleSort("writingAvg")}>Writing</button>
          <button onClick={() => this.handleSort("editingAvg")}>Editing</button>
          <button onClick={() => this.handleSort("cameraWorkAvg")}>
            Camera
          </button>
          <button onClick={() => this.handleSort("lightingAvg")}>
            Lighting
          </button>
          <button onClick={() => this.handleSort("actingAvg")}>Acting</button>
        </div>
      </div>
    );
  }
}
