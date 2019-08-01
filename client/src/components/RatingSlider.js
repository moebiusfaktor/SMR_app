import React, { Component } from "react";
import "./RatingSlider.css";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
// import Router from "@material-ui/core/Router";
import Link from "@material-ui/core/Link";
import grey from "@material-ui/core/colors/grey";

const useStyles = makeStyles(theme => ({
  root: {
    width: 400
  },
  margin: {
    height: theme.spacing(6)
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  }
}));

const marks = [
  {
    value: 0,
    label: "0°C"
  },
  {
    value: 20,
    label: "20°C"
  },
  {
    value: 37,
    label: "37°C"
  },
  {
    value: 100,
    label: "100°C"
  }
];

function valuetext(value) {
  return `${value}`;
}

function valueLabelFormat(value) {
  return marks.findIndex(mark => mark.value === value) + 1;
}

export default function RatingSlider(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-small-steps" gutterBottom>
        Directing
      </Typography>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-small-steps"
        step={1}
        marks
        min={0}
        max={9}
        valueLabelDisplay="auto"
        name="directing"
        onChange={(e, value) => props.updateRating("directing", value)}
      />
      <Typography id="discrete-slider-small-steps" gutterBottom>
        Writing
      </Typography>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-small-steps"
        step={1}
        marks
        min={0}
        max={9}
        valueLabelDisplay="auto"
        name="writing"
        onChange={(e, value) => props.updateRating("writing", value)}
      />
      <Typography id="discrete-slider-small-steps" gutterBottom>
        Editing
      </Typography>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-small-steps"
        step={1}
        marks
        min={0}
        max={9}
        valueLabelDisplay="auto"
        name="editing"
        onChange={(e, value) => props.updateRating("editing", value)}
      />
      <Typography id="discrete-slider-small-steps" gutterBottom>
        Camerawork
      </Typography>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-small-steps"
        step={1}
        marks
        min={0}
        max={9}
        valueLabelDisplay="auto"
        name="cameraWork"
        onChange={(e, value) => props.updateRating("cameraWork", value)}
      />
      <Typography id="discrete-slider-small-steps" gutterBottom>
        Lighting
      </Typography>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-small-steps"
        step={1}
        marks
        min={0}
        max={9}
        valueLabelDisplay="auto"
        name="lighting"
        onChange={(e, value) => props.updateRating("lighting", value)}
      />
      <Typography id="discrete-slider-small-steps" gutterBottom>
        Acting
      </Typography>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-small-steps"
        step={1}
        marks
        min={0}
        max={9}
        valueLabelDisplay="auto"
        name="acting"
        onChange={(e, value) => props.updateRating("acting", value)}
      />
      <Typography id="discrete-slider-small-steps" gutterBottom>
        Genremeter
      </Typography>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-small-steps"
        step={1}
        marks
        min={0}
        max={9}
        valueLabelDisplay="auto"
        name="genreMeter"
        onChange={(e, value) => props.updateRating("genreMeter", value)}
      />
    </div>
  );
}
