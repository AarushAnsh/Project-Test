import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Spinner from "./Spinner";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const url = `https://api.tvmaze.com/shows/${id}`;
  const { data: movie, error, loading } = useFetch(url);

  useEffect(() => {
    return () => console.log("going out "); //cleanup function runs before unmounting or moving out of this page/component eg. removing timer , resetting state
  }, []);

  if (loading) {
    return <Spinner />;
  }
  if (error) return <p className="text-sm text-red-600">Something went wrong</p>;

  return (
    <div>
      {movie && (
        <div className="flex flex-col sm:flex-row gap-6">
          <img
            src={movie?.image?.medium}
            alt={movie?.name}
            className="w-48 rounded border border-gray-200 shrink-0"
          />

          <div className="flex-1">
            <h1 className="text-2xl font-semibold">{movie?.name}</h1>

            <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm max-w-sm">
              <dt className="text-gray-500">ID</dt>
              <dd>{movie?.id}</dd>

              <dt className="text-gray-500">Type</dt>
              <dd>{movie?.type}</dd>

              <dt className="text-gray-500">Runtime</dt>
              <dd>{movie?.runtime}</dd>

              <dt className="text-gray-500">Language</dt>
              <dd>{movie?.language}</dd>
            </dl>

            <div
              className="mt-4 text-sm leading-relaxed text-gray-700"
              dangerouslySetInnerHTML={{ __html: movie?.summary }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
