import React, { Component } from "react";
import { movies } from "../movieData";

export class MoviesList extends Component {

  constructor(){
    super()
    this.state= {
      hover : "",
      pageArr : [1]
    }
  }


  render() {
    let movieArray = movies.results;
    return (
      <>
        <div>
          <h3 className="text-center">
            <strong>Trending</strong>
          </h3>
        </div>

        <div className="movies-list">
          {movieArray.map((arrayElm) => {
            return (
              <div
                className="card movie-card"
                // onMouseEnter and onMouseDown both are same like doms mouseOver and mouseDown
                onMouseEnter={() => this.setState({ hover: arrayElm.id }) } onMouseLeave= {() => this.setState({hover : ''})}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${arrayElm.backdrop_path}`}
                  style={{ height: "40vh", width: "20vw" }}
                  className="card-img-top movie-img"
                  alt="..."
                />

                <h5 className="card-title movie-title">{arrayElm.title}</h5>

                <div
                  className="button-wrapper "
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  {this.state.hover == arrayElm.id && (
                    <a
                      href="#"
                      className="btn btn-primary movie-button text-center"
                    >
                      Add favourite
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* {pagination} */}
        <div style={{display :"flex" , justifyContent : "center"}}>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#">
                  Previous
                </a>
              </li>
                 {this.state.pageArr.map((value) =>{
                     <li class="page-item">
                       <a class="page-link" href="#">
                        {value}
                      
                       </a>
                     </li>


                 })}
              <li class="page-item">
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
}

export default MoviesList;
