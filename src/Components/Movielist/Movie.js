import React from "react";
import Card from "../MovieCard/Card";

const Movie = ({ movie }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {movie.map((item) => {
        return <Card key={item} movie={item} />;
      })}
    </div>
  );
};

export default Movie;
