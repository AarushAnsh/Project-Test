import React from "react";
import "./Movie.css";
import Card from "../MovieCard/Card";

const Movie = ({ movie }) => {
  return (
    <div className="movielist">
      {movie.map((item) => {
        return (
          <div key={item.id}>
              <Card movie={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Movie;
