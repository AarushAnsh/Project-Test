import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const url = `https://api.tvmaze.com/shows/${id}`;
  const { data: movie, error, loading } = useFetch(url);
  
  useEffect(() => {
    return () => console.log("going out "); //cleanup function runs before unmounting or moving out of this page/component eg. removing timer , resetting state
  }, []);

  if (loading) {
    return <p>loading... </p>;
  }
  if (error) return <p>Something went wrong</p>;

  return (
    <div>
      {movie && (
        <div>
          <img src={movie?.image?.medium} />
          <h3>{movie?.name}</h3>
          <h3>{movie?.id}</h3>
          <h3>{movie?.type}</h3>
          <h3>{movie?.runtime}</h3>
          <h3>{movie.language}</h3>
          <p>{movie.summary}</p>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
