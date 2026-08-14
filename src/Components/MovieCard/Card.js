import React from "react";
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
    <div className="relative bg-white border border-gray-200 rounded overflow-hidden">
      <FcLikePlaceholder
        size={20}
        className="absolute top-2 right-2 cursor-pointer z-10"
        onClick={saveMovieHandler}
      />

      {movie?.image?.medium ? (
        <img
          src={movie?.image?.medium}
          alt={movie.name}
          onClick={openMovieDetailsHandler}
          className="w-full h-64 object-cover cursor-pointer"
        />
      ) : (
        <div
          onClick={openMovieDetailsHandler}
          className="w-full h-64 flex items-center justify-center bg-gray-200 text-sm text-gray-500 cursor-pointer"
        >
          No image found
        </div>
      )}

      <div className="p-3">
        <h3 className="text-sm font-medium truncate">{movie?.name}</h3>
        <p className="text-xs text-gray-500 mt-1">{movie?.genres?.[0]}</p>
        <p className="text-xs text-gray-700 mt-1">
          {movie?.rating?.average ?? "N/A"}
        </p>
      </div>
    </div>
  );
};

export default Card;
