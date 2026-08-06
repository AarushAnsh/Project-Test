import getMovies from "./Services/api";
import "./App.css";
import Navbar from "./Components/Navbar";
import Searchbar from "./Components/Search bar/Searchbar";
import Movie from "./Components/Movielist/Movie";
import { useEffect, useState } from "react";

function App() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery) {
      const getMovieResult = async () => {
        try {
          setLoading(true);
          const response = await fetch(
            "https://api.tvmaze.com/search/shows?q=" + searchQuery
          );
          const resData = await response.json();
          let transformData = resData.map((res) => {
            return res.show;
          });
          setLoading(false);
          setMovie(transformData);
        } catch (error) {
          console.log(error, "errorr");
          setLoading(false);
        }
      };

      getMovieResult();
    }
  }, [searchQuery]);

  // api call hhoga with help of searchQuery

  useEffect(() => {
    async function fetchMovie() {
      try {
        setLoading(true);
        const movies = await getMovies();
        setMovie(movies);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, []);

  return (
    <div className="app_container">
      <Navbar />
      <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {loading && <p>Loading.....</p>}
      {error && <p>{error}</p>}
      {movie.length > 0 ? (
        <Movie movie={movie} />
      ) : (
        !loading && <p>No movies found</p>
      )}
    </div>
  );
}

export default App;
