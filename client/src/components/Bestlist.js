import React, { Component } from "react";
import axios from "axios";

export default class Bestlist extends Component {
  state = {
    movies: [],
    sort: "actingAvg"
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
        <div>
          <button onClick={() => this.handleSort("directingAvg")}>
            Directing
          </button>
          <button onClick={() => this.handleSort("writingAvg")}>Writing</button>
          <button onClick={() => this.handleSort("editingAvg")}>Editing</button>
          <button onClick={() => this.handleSort("cameraWorkAvg")}>
            Camera Work
          </button>
          <button onClick={() => this.handleSort("lightingAvg")}>
            Lighting
          </button>
          <button onClick={() => this.handleSort("actingAvg")}>Acting</button>
          <button onClick={() => this.handleSort("genreMeterAvg")}>
            Genre Meter
          </button>
        </div>
        {[...this.state.movies]
          .sort((a, b) => b[this.state.sort] - a[this.state.sort])
          .map(movie => (
            <div>
              <p>directingAvg:{movie.directingAvg}</p>
              <p>writingAvg:{movie.writingAvg}</p>
              <p>editingAvg:{movie.editingAvg}</p>
              <p>cameraWorkAvg:{movie.cameraWorkAvg}</p>
              <p>lightingAvg:{movie.lightingAvg}</p>
              <p>actingAvg:{movie.actingAvg}</p>
              <p>genreMeterAvg:{movie.genreMeterAvg}</p>
            </div>
          ))}
      </div>
    );
  }
}
