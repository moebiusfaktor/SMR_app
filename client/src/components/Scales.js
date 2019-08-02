import React, { Component } from "react";
import axios from "axios";
import { HorizontalBar } from "react-chartjs-2";

export class Scales extends Component {
  render() {
    const { averageRating, userRating } = this.props;

    const data = {
      labels: [
        "Directing",
        "Writing",
        "Editing",
        "Camera",
        "Lighting",
        "Acting",
        "Sound",
      ],

      datasets: [
        {
          label: "Average Rating",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "#FFFFFF",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [
            averageRating.directing,
            averageRating.writing,
            averageRating.editing,
            averageRating.cameraWork,
            averageRating.lighting,
            averageRating.acting,
            averageRating.genreMeter,
          ]
        },
        {
          label: "My Rating",
          backgroundColor: "rgba(127,99,132,0.2)",
          borderColor: "#000000",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(127,99,132,0.4)",
          hoverBorderColor: "rgba(127,99,132,1)",
          data: [
            userRating.directing,
            userRating.writing,
            userRating.editing,
            userRating.cameraWork,
            userRating.lighting,
            userRating.acting,
            userRating.genreMeter,
          ]
        }
      ]
    };

    return (
      <div style={{width: "50rem"}}>
        
        <HorizontalBar
          options={{
            scales: {
              xAxes: [
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
