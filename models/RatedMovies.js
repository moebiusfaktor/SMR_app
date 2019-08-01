const mongoose = require("mongoose");
const { Schema } = mongoose;

const RatedMovieSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  tmdb_id: String,
  directing: Number,
  writing: Number,
  editing: Number,
  cameraWork: Number,
  lighting: Number,
  acting: Number,
  genreMeter: Number,
  title: String,
  poster: String,
  director: String,
  dop: String,
  year: String,
  overview: String
});

const RatedMovies = mongoose.model("RatedMovie", RatedMovieSchema);

module.exports = RatedMovies;
