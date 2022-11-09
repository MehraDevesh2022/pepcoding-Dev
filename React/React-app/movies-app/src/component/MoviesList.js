import React, { Component } from "react";
import { movies } from "../movieData";
import axios from "axios";
export class MoviesList extends Component {

  constructor(){
    super()
    this.state= {
      hover : "",
      pageArr : [1],
      movieArr : [],
      currPage : 1
    }
  }

  // componentDidMount method only runs one time in react life cycle when data requird so we need this code responsive for more uses so make new function with same code
 async componentDidMount(){
   let res = await axios('https://api.themoviedb.org/3/movie/popular?api_key=4d8e0bed443e8ebba0ce19fbfe2b872c&language=en-US&page=1')
   let movieDataObj = res.data;
  // console.log(movieDataObj.results);
   this.setState({
    movieArr : [...movieDataObj.results]
   })
  }

 changeMovies = async() =>{
   let res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=4d8e0bed443e8ebba0ce19fbfe2b872c&language=en-US&page=${this.state.currPage}`)
    let movieDataObj = res.data;
    // console.log(movieDataObj.results);
    this.setState({
      movieArr: [...movieDataObj.results]
    })
  }

  handleNextPage = ()=>{
    let tempArr =[];
    for(let i=1; i<=this.state.pageArr.length+1; i++){
      tempArr.push(i);
    }
    console.log("hello" ,tempArr);
  this.setState({
    pageArr : [...tempArr],
    currPage : this.state.currPage+1
  },this.changeMovies) // this is how in after setstate we have option to call function
  }

  handlePreviousPage = ()=>{
    if(this.state.currPage !=1){
      this.setState({
        currPage: this.state.currPage-1
      }, this.changeMovies)
    }
  }

  handleValuePage =(pageValue)=>{
    if(pageValue != this.state.currPage){
      this.setState({
        currPage : pageValue
      },this.changeMovies)
    }
  }

  render() {

    return (
      <>
        <div>
          <h3 className="text-center">
            <strong>Trending</strong>
          </h3>
        </div>

        <div className="movies-list">
          {this.state.movieArr.map((arrayElm) => {
            return (
              <div
                className="card movie-card"
                // onMouseEnter and onMouseDown both are same like doms mouseOver and mouseDown
                onMouseEnter={() => this.setState({ hover: arrayElm.id }) } 
                onMouseLeave= {() => this.setState({hover : ''})}
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
                <a class="page-link" onClick={this.handlePreviousPage}>
                  Previous
                </a>
              </li>

               {this.state.pageArr.map((pageVal) => {
                 return (<li class="page-item">
                   <a class="page-link" onClick={()=>this.handleValuePage(pageVal)}>
                     {pageVal}
                   </a>
                 </li>)
  })}
              <li class="page-item">
                <a class="page-link" onClick={this.handleNextPage}>
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
