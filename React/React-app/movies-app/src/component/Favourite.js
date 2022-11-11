import React, { Component } from "react";
import { movies } from "../movieData";
export class Favourite extends Component {
   
    constructor(){
        super();
        this.state={
            genres :[],
           currGenre : "All genre",
           favouriteArr : [] 
        }
    }
   
    handelDanzerZone = (movie) => {

       
        let tempData = this.state.favouriteArr.filter((myObj) => {
            return myObj.id != movie.id
        })
        localStorage.setItem('movie-app', JSON.stringify(tempData))
        this.setState({
           favouriteArr : [...tempData]
        })
        
      

    }


   
    render() {
        let genreIdObj = { "genres": [{ "id": 28, "name": "Action" }, { "id": 12, "name": "Adventure" }, { "id": 16, "name": "Animation" }, 
        { "id": 35, "name": "Comedy" }, { "id": 80, "name": "Crime" }, 
        { "id": 99, "name": "Documentary" }, { "id": 18, "name": "Drama" }, { "id": 10751, "name": "Family" }, 
        { "id": 14, "name": "Fantasy" }, { "id": 36, "name": "History" }, 
        { "id": 27, "name": "Horror" }, { "id": 10402, "name": "Music" }, 
        { "id": 9648, "name": "Mystery" }, 
        { "id": 10749, "name": "Romance" }, { "id": 878, "name": "Science Fiction" }, 
        { "id": 10770, "name": "TV Movie" }, { "id": 53, "name": "Thriller" }, 
        { "id": 10752, "name": "War" }, { "id": 37, "name": "Western" }] }

        let oldData = JSON.parse(localStorage.getItem('movie-app'));
      this.state.favouriteArr =[...oldData]
        // this is for genre type section
        let tempArr = [];
        this.state.favouriteArr.map((movieObj)=>{
         genreIdObj.genres.map((genreName)=>{
              if(genreName.id === movieObj.genre_ids[0]){
                tempArr.push(genreName.name);
              }
         })
      
        
})         // adding another elm All genere
        tempArr.unshift('All genre')

    
        return (


            <div className="main">
                <div className="row">
                    <div className="col-3">
                        <ul class="list-group genre-selector">
                        {tempArr.map((generName) =>(
                          this.state.currGenre === generName ?
                                <li style={{ backgroundColor:"#3f51b5" , color :"white" , fontWeight : "bolder" , textAlign : "center"}} className="list-group-item">{generName}</li>
                                : <li style={{ color: "#3f51b5" ,textAlign: "center" }} className="list-group-item">{generName}</li>
                      ))}
                            
                        </ul>
                    </div>
                    <div className="col-9 favourites-table">
                        <div className="row">
                            <input type="text" className="input-group-text col" />
                            <input type="number" className="input-group-text col" />
                        </div>

                        <div className="row">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Genre</th>
                                        <th scope="col">Popularity</th>
                                        <th scope="col">Ratting</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.favouriteArr.map((movieObj) => (
                                            <tr>
                                                <td >
                                                    <img 
                                                    style={{ width: "6rem" }} 
                                                    src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} />
                                                    
                                                    </td>
                                                <th scope="row">{movieObj.title}</th>
                                                {/* this is for genre from genreIdObj */}
                                               
                                                {genreIdObj.genres.map((genreNameArr) => {
                                                    if (genreNameArr.id === movieObj.genre_ids[0]) {
                                                        return (<td>{genreNameArr.name}</td>)
                                                    }
                                                })}
                                                <td>{movieObj.popularity}</td>
                                                <td>{movieObj.vote_average}</td>
                                                <td>{<button type="button" class="btn btn-danger" onClick={()=>this.handelDanzerZone(movieObj)}>Danger</button>}</td>
                                            </tr>
                                        ))
                                    }



                                </tbody>
                            </table>
                        </div>
                        <div aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">Next</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

export default Favourite