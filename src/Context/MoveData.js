import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
// import getMovies from "../Services/api";

export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
//   const { data, error, loading } = useFetch("https://api.tvmaze.com/shows");
//   console.log(data, error, loading);
  //   const [searchQuery, setSearchQuery] = useState("");

  //   async function submitHandler(e) {
  //     e.preventDefault();
  //     const url = "https://api.tvmaze.com/search/shows?q=" + searchQuery;
  //     try {
  //       setLoading(true);
  //       const res = await fetch(url);
  //       const data = await res.json();
  //       const transformData = data.map((item) => item.show);
  //       setMovie(transformData);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  return (
    <MovieContext.Provider
    //   value={
    //     {
    //     movie,
    //     setMovie,
    //     loading,
    //     error,
    //     searchQuery,
    //     setSearchQuery,
    //     submitHandler,
    //   }}
    >
      {children}
    </MovieContext.Provider>
  );
};

// custom hook so components don't have to import MovieContext everywhere
// const useMovieContext = () => useContext(MovieContext);

export { MovieContextProvider };
