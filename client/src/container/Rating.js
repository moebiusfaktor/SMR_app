import React, { Component } from "react";
import axios from "axios";
import "./Rating.css";
import NavBar from "../components/NavBar";
import { element } from "prop-types";
import RatingSlider from "../components/RatingSlider";
import RatingButton from "../components/RatingButton";
import Scales from "../components/Scales";
import Radar from "../components/Radar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Rating extends Component {
  state = {
    tmdb_id: "",
    title: "",
    poster: "",
    director: "",
    dop: "",
    year: "",
    overview: "",
    directing: 0,
    writing: 0,
    editing: 0,
    cameraWork: 0,
    lighting: 0,
    acting: 0,
    genreMeter: 0,
    ratedArray: [],
    isRatedByUser: false,
    averageRating: {},
    userRating: {},
    toggleRadar: false
  };

  updateRating = (category, value) => {
    this.setState({ [category]: value });
  };

  handleClick = () => {
    //console.log("does it come through", this.state);
    axios
      .post("/api/ratedMovies", this.state)
      .then(response => {
        this.setState({ isRatedByUser: true });
      })
      .catch(err => {
        this.props.history.push("/login");
      });
  };

  componentDidMount() {
    const tmdb_id = this.props.match.params.id;
    this.setState({ tmdb_id: tmdb_id });

    /*   let ratedCats = response.data.getElementsByName(movies => {
      return movie.tmdb_id === this.state.tmdb_id}) */

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${tmdb_id}?api_key=8f65e058909f840142cc388d8da5b828&append_to_response=credits`
      )
      .then(response => {
        console.log(response.data);
        let dop = response.data.credits.crew.find(
          el => el.job === "Director of Photography"
        );
        this.setState({
          title: response.data.title,
          // year: response.data.release_date.slice(0, 3),
          overview: response.data.overview,
          poster: response.data.poster_path,
          director: response.data.credits.crew.find(el => el.job === "Director")
            .name,
          dop: dop ? dop.name : ""
        });
      })
      .catch(err => console.log("Error while getting movies", err));
    // create route to get all the ratedmovies with the same tmdb_Id

    axios.get(`/api/ratedMovies/${tmdb_id}`).then(response => {
      this.setState({ ratedArray: response.data });
      console.log(response.data);
    });

    axios
      .get(`/api/ratedMovies/${tmdb_id}`)
      .then(response => {
        let userRated = response.data.filter(movie => {
          return movie.user_id === this.props.user._id;
        });
        console.log(userRated);
        if (userRated.length !== 0) {
          this.setState({ isRatedByUser: true });
          const {
            acting,
            cameraWork,
            directing,
            lighting,
            writing,
            genreMeter,
            editing
          } = userRated[0];
          this.setState({
            userRating: {
              acting,
              cameraWork,
              directing,
              lighting,
              writing,
              genreMeter,
              editing
            }
          });
        }

        let sum = response.data.reduce(
          (acc, movie, i) => {
            return {
              acting: acc.acting + Number(movie.acting),
              cameraWork: acc.cameraWork + Number(movie.cameraWork),
              directing: acc.directing + Number(movie.directing),
              lighting: acc.lighting + Number(movie.lighting),
              writing: acc.writing + Number(movie.writing),
              genreMeter: acc.genreMeter + Number(movie.genreMeter),
              editing: acc.editing + Number(movie.editing)
            };
          },
          {
            acting: 0,
            cameraWork: 0,
            directing: 0,
            lighting: 0,
            writing: 0,
            genreMeter: 0,
            editing: 0
          }
        );

        let averageRating = {
          acting: sum.acting / response.data.length,
          cameraWork: sum.cameraWork / response.data.length,
          directing: sum.directing / response.data.length,
          lighting: sum.lighting / response.data.length,
          writing: sum.writing / response.data.length,
          genreMeter: sum.genreMeter / response.data.length,
          editing: sum.editing / response.data.length
        };

        this.setState({ averageRating });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleRadar = () => {
    this.setState({ toggleRadar: !this.state.toggleRadar });
  };
  // axios.get(`/api/ratedMovies/${tmdb_id}`).then(res => {
  //   this.setState({ isRatedByUser: res.data });
  //   console.log(res.data.filter(e => e.user_id === this.props.user._id));
  // });
  // console.log("this is fucked", this.props.user);

  render() {
    return (
      <div className="rating-container">
        <div className="movie-card">
          <h2>{this.state.title}</h2>
          <p>
            <h5>directed by: {this.state.director}</h5>
            <br />
            <h5>DoP: {this.state.dop}</h5>
            <br />
          </p>
          <div className="poster-shadow">
            <img
              src={`https://image.tmdb.org/t/p/w500${this.state.poster}`}
              alt=""
            />
          </div>
          {/* <h6>{this.state.overview}</h6> */}
        </div>
        <div>
          {!this.state.isRatedByUser ? (
            <div>
              <RatingSlider updateRating={this.updateRating} />
              <button onClick={this.handleClick}>rate movie</button>
            </div>
          ) : !this.state.toggleRadar ? (
            <div>
              <Scales
                averageRating={this.state.averageRating}
                userRating={this.state.userRating}
              />
              <button onClick={this.handleRadar}>see Radar</button>
            </div>
          ) : (
            <div>
              <Radar
                averageRating={this.state.averageRating}
                userRating={this.state.userRating}
              />
              <button onClick={this.handleRadar}>see Scales</button>
            </div>
          )}

          {/*  <RatingButton /> */}
          {/* cond ? this : satetrue ? Scales : Scales2 */}
        </div>
      </div>
    );
  }
}

export default Rating;
