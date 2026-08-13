import { createContext, useContext, useEffect, useState } from "react";
import getMovies from "../Services/api";

export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchMovie() {
      try {
        setLoading(true);
        const movies = await getMovies();
        setMovie(movies);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, []);

  async function submitHandler(e) {
    e.preventDefault();
    const url = "https://api.tvmaze.com/search/shows?q=" + searchQuery;
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      const transformData = data.map((item) => item.show);
      setMovie(transformData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <MovieContext.Provider
      value={{
        movie,
        setMovie,
        loading,
        error,
        searchQuery,
        setSearchQuery,
        submitHandler,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

// custom hook so components don't have to import MovieContext everywhere
// const useMovieContext = () => useContext(MovieContext);

export { MovieContextProvider };
