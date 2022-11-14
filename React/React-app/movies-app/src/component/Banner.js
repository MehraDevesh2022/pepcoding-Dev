import axios from "axios";
import React, { Component } from "react";
import {movies} from '../movieData'
export class Banner extends Component {


 
  render() {
    let randomNum = Math.floor(Math.random() * movies.results.length)
     
    return (
        <div className="card banner-card">
        <img src={`https://image.tmdb.org/t/p/original${movies.results[randomNum].poster_path}` } className="card-img-top banner-img" alt="..."/>
        
            <h5 className="card-title banner-title">{movies.results[randomNum].title}</h5>
            {/* <p className="card-text banner-text">{movies.results[randomNum].overview}</p> */}
          </div>
      
    )
  }
}
export default Banner
