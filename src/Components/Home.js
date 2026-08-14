import React, { useContext } from "react";
import Searchbar from "./Search bar/Searchbar";
import Movie from "./Movielist/Movie";
import useFetch from "../hooks/useFetch";
// import { MovieContext } from "../Context/MoveData";

const Home = () => {
  // const {
  //   movie,
  //   setMovie,
  //   loading,
  //   error,
  //   searchQuery,
  //   setSearchQuery,
  //   submitHandler,
  // } = useContext(MovieContext);

  const {
    data: movie,
    error,
    loading,
  } = useFetch("https://api.tvmaze.com/shows");

  return (
    <div>
      {/* <Searchbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        submitHandler={submitHandler}
      /> */}
      {loading && <p>Loading.....</p>}
      {error && <p>{error}</p>}
      {movie.length > 0 ? (
        <Movie movie={movie} />
      ) : (
        !loading && <p>No movies found</p>
      )}
    </div>
  );
};

export default Home;
