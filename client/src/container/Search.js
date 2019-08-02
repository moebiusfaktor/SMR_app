import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Search.css";

export class Search extends Component {
  state = {
    searchInput: "",
    movies: []
  };

  handleChange = event => {
    const { name, value } = event.target;
    console.log(value);

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=8f65e058909f840142cc388d8da5b828&query=${value}`
      )
      .then(movies => {
        this.setState({
          movies: movies.data.results
        });
      })
      .catch(err => {
        this.setState({ movies: [] });
      });

    this.setState({
      [name]: value
    });
  };

  addDefaultSrc(ev) {
    ev.target.src = "/images/SMR_poster_alt.png";
  }

  render() {
    return (
      <div className="search">
        <form>
          <input
            className={
              this.state.movies.length && this.state.searchInput
                ? "Searchbar-top"
                : "Searchbar-center"
            }
            onChange={this.handleChange}
            type="text"
            name="searchInput"
            value={this.state.searchInput}
            box-sizing="border-box"
          />
        </form>

        {this.state.movies && this.state.movies[0] ? (
          <div className="movies-list">
            {this.state.movies.map(element => (
              <div className="movie-card">
                <Link key={element.id} to={`/Rating/${element.id}`}>
                  {/* <p>{element.title}</p> */}
                  <img
                    className="gallery"
                    src={`https://image.tmdb.org/t/p/w500${
                      element.poster_path
                    }`}
                    onError={this.addDefaultSrc}
                  />
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <img className="big-logo" src="/images/SMR_logo_tag.png" />
        )}
      </div>
    );
  }
}

export default Search;
