import React, { useEffect, useState } from "react";
import Movie from "./Movielist/Movie";
import useFetch from "../hooks/useFetch";
import Spinner from "./Spinner";
import usePagination from "../hooks/usePagination";
import PaginationButton from "./PaginationButton/PaginationButton";
import axios from "axios";


const Home = () => {
  const [searchKey, setSearchKey] = useState("");

  const {
    data: movie,
    error,
    loading,
  } = useFetch("https://api.tvmaze.com/shows");

  //map,filter,reduce -> array , => new array

  


  const [filterMovie, setFilterMovie] = useState([]);

  useEffect(() => {
    if (movie.length > 0) setFilterMovie(movie);
  }, [movie]);

  useEffect(() => {
    const fetchSearchedData = async () => {
      try {
        const getMovieData = await axios(
          `https://api.tvmaze.com/search/shows?q=${searchKey}`
        );

        const transformMovieData = getMovieData.data.map((movie) => {
          return movie.show;
        });
        setFilterMovie(transformMovieData);
      } catch (error) {
        console.log(error.message);
      }
    };
    if (searchKey) fetchSearchedData();
    else setFilterMovie(movie);
  }, [searchKey]);

  const { startIndex, endIndex, currentPage, totalPage, prevPage, nextPage } =
    usePagination(filterMovie, 5);

  const onSearchHandler = (e) => {
    setSearchKey(e.target.value);
  };

  const paginatedMovie = filterMovie?.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col gap-4">
      {/* <Searchbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        submitHandler={submitHandler}
      /> */}
      {loading && <Spinner />}
      {error && <p className="text-sm text-red-600">Something went wrong</p>}
      <input
        onChange={onSearchHandler}
        value={searchKey}
        className="border border-gray-300 outline-none w-60 rounded-md p-1.5"
        placeholder="Search Movie..."
      />
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
