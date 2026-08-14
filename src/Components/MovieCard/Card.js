import React from "react";
import "./Card.css";
import { FcLikePlaceholder } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Card = ({ movie }) => {
  const navigate = useNavigate();

  const openMovieDetailsHandler = () => {
    navigate(`/movie/${movie.id}`);
  };


 

  const saveMovieHandler = () => {
    const getMovies = localStorage.getItem("savedMovie");
    if (getMovies) {
      const parsedMovie = JSON.parse(getMovies);
      localStorage.setItem(
        "savedMovie",
        JSON.stringify([...parsedMovie, movie])
      );
    } else {
      localStorage.setItem("savedMovie", JSON.stringify([movie]));
    }
  };

  return (
    <div className="card">
      {movie?.image?.medium ? (
        <img
          src={movie?.image?.medium}
          alt={movie.name}
          onClick={openMovieDetailsHandler}
        />
      ) : (
        <div style={{ backgroundColor: "red" }}> No image found</div>
      )}
      <h3>{movie?.name}</h3>
      <p>{movie?.genres[0]}</p>
      <h3>{movie?.rating.average}</h3>
      <FcLikePlaceholder
        size={20}
        className="card-icon"
        onClick={saveMovieHandler}
      />
    </div>
  );
};

export default Card;
