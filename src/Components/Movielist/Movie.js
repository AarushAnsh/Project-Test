import React from "react";
import "./Movie.css";
import Card from "../MovieCard/Card";
import { Route,Router } from "react-router-dom";

import { Link } from "react-router-dom";
const Movie = ({ movie }) => {
  return (
    <div className="movielist">
      {movie.map((item) => {
        return (
          <div key={item.id}>
            <Link to= {`/movie/${item.id}`} >
              <Card movie={item} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Movie;
