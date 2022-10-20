import React, { Component } from "react";
import {movies} from '../movieData'
export class Banner extends Component {
  render() {
    return (
      <div className="card banner-card">
        <img
          src={`https://image.tmdb.org/t/p/original${movies.results[Math.floor(Math.random() * movies.results.length) +1 ].backdrop_path}`}
          className="card-img-top banner-img"
          alt="..."
        />

        <h5 className="card-title banner-title">Card title</h5>
        <p className="card-text banner-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    );
  }
}
export default Banner
