import "./App.css";
import MoviesList from "./component/MoviesList";
import NavBar from "./component/NavBar";
import Banner from './component/Banner'
import MyFavourite from "./component/MyFavourite";

function App() {
  return (
    <>
      <NavBar/>
      {/* <Banner/>
      
     <MoviesList/> */}
      <MyFavourite />
    </>
  );
}

export default App;
