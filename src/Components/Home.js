import React, { useContext } from "react";
import Searchbar from "./Search bar/Searchbar";
import Movie from "./Movielist/Movie";
import { MovieContext } from "../Context/MoveData";

const Home = () => {
  const {
    movie,
    setMovie,
    loading,
    error,
    searchQuery,
    setSearchQuery,
    submitHandler,
  } = useContext(MovieContext);

  return (
    <div>
      <Searchbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        submitHandler={submitHandler}
      />
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
