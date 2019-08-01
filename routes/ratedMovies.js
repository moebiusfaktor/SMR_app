const express = require("express");
const router = express.Router();
const RatedMovie = require("../models/RatedMovies.js");

router.get("/", (req, res) => {
  RatedMovie.aggregate([
    {
      $group: {
        _id: "$tmdb_id",
        title: { $first: "$title" },
        poster: { $first: "$poster" },
        director: { $first: "$director" },
        dop: { $first: "$dop" },
        year: { $first: "$year" },
        overview: { $first: "$overview" },
        directingAvg: { $avg: "$directing" },
        writingAvg: { $avg: "$writing" },
        editingAvg: { $avg: "$editing" },
        cameraWorkAvg: { $avg: "$cameraWork" },
        lightingAvg: { $avg: "$lighting" },
        actingAvg: { $avg: "$acting" },
        genreMeterAvg: { $avg: "$genreMeter" }
      }
    }
  ]).then(data => {
    res.json(data);
  });
});

router.get("/:id", (req, res) => {
  console.log("called");
  RatedMovie.find({ tmdb_id: req.params.id }).then(movies => {
    res.json(movies);
  });
});

router.post("/", (req, res) => {
  // const title = req.body.title
  // const description = req.body.description
  console.log(req.body);
  const {
    tmdb_id,
    title,
    poster,
    director,
    dop,
    year,
    overview,
    directing,
    writing,
    editing,
    cameraWork,
    lighting,
    acting,
    genreMeter
  } = req.body;

  // Project.create({ title: title, description: description })
  RatedMovie.create({
    tmdb_id,
    title,
    poster,
    director,
    dop,
    year,
    overview,
    directing,
    writing,
    editing,
    cameraWork,
    lighting,
    acting,
    genreMeter,
    user_id: req.user._id
  })
    .then(RatedMovie => {
      console.log("new", RatedMovie);
      res.json(RatedMovie);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
