import React from "react";
import "./Movie.css";
import Card from "../MovieCard/Card";

const Movie = ({ movie }) => {

const onClickHandler = (item) => {
  router.push(`/movie/${item.id}`)
}


  return (
    <div className="movielist">
      {movie.map((item) => {
        return (
          <div key={item.id} onClick={(item) => onClickHandler(item)}>
            <Card movie={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Movie;
