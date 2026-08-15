import React, { useContext } from "react";
import Searchbar from "./Search bar/Searchbar";
import Movie from "./Movielist/Movie";
import useFetch from "../hooks/useFetch";
import Spinner from "./Spinner";
import usePagination from "../hooks/usePagination";
import PaginationButton from "./PaginationButton/PaginationButton";
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

  const { startIndex, endIndex, currentPage, totalPage, prevPage, nextPage } =
    usePagination(movie, 10);

  const paginatedMovie = movie?.slice(startIndex, endIndex);

  return (
    <div>
      {/* <Searchbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        submitHandler={submitHandler}
      /> */}
      {loading && <Spinner />}
      {error && <p className="text-sm text-red-600">Something went wrong</p>}
      {movie.length > 0 ? (
        <Movie movie={paginatedMovie} />
      ) : (
        !loading && <p className="text-sm text-gray-500">No movies found</p>
      )}

      <PaginationButton
        onNextHandler={nextPage}
        onPrevHandler={prevPage}
        totalPage={totalPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Home;
