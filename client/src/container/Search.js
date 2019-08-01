import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Search.css";

export class Search extends Component {
  state = {
    searchInput: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    console.log(value);

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=8f65e058909f840142cc388d8da5b828&query=${value}`
      )
      .then(movies => {
        console.log("get movies", movies.data.results);
        this.setState({
          movies: movies.data.results
        });
      })
      .catch(err => console.log("Error while getting movies", err));

    this.setState({
      [name]: value
    });
  };

  render() {
    console.log(this.state.movies);
    return (
      <div style={{ marginTop: "100px" }}>
        <form>
          <input
            onChange={this.handleChange}
            type="text"
            name="searchInput"
            value={this.state.searchInput}
            box-sizing="border-box"
          />
        </form>

        {this.state.movies &&
          this.state.movies[0] &&
          this.state.movies.map(element => (
            <div>
              <Link to={`/Rating/${element.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
                />
                <h2>{element.title}</h2>
              </Link>
            </div>
          ))}
      </div>
    );
  }
}

export default Search;
