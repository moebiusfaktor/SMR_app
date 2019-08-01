import React, { Component } from "react";
import axios from "axios";
import { HorizontalBar } from "react-chartjs-2";

export class Scales extends Component {
  render() {
    const { averageRating, userRating } = this.props;

    const data = {
      labels: [
        "Acting",
        "Camera Work",
        "Directing",
        "Editing",
        "GenreMeter",
        "Lighting",
        "Writing"
      ],

      datasets: [
        {
          label: "Average Rating",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [
            averageRating.acting,
            averageRating.cameraWork,
            averageRating.directing,
            averageRating.editing,
            averageRating.genreMeter,
            averageRating.lighting,
            averageRating.writing
          ]
        },
        {
          label: "My Rating",
          backgroundColor: "rgba(127,99,132,0.2)",
          borderColor: "rgba(127,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(127,99,132,0.4)",
          hoverBorderColor: "rgba(127,99,132,1)",
          data: [
            userRating.acting,
            userRating.cameraWork,
            userRating.directing,
            userRating.editing,
            userRating.genreMeter,
            userRating.lighting,
            userRating.writing
          ]
        }
      ]
    };

    return (
      <div>
        <h2>Horizontal Bar Example</h2>
        <HorizontalBar
          options={{
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true
                  }
                }
              ]
            }
          }}
          data={data}
        />
      </div>
    );
  }
}

export default Scales;
