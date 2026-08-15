import React, { useState } from "react";
import Card from "../MovieCard/Card";
import { FiDelete } from "react-icons/fi";
import usePagination from "../../hooks/usePagination";
import PaginationButton from "../PaginationButton/PaginationButton";

function SavedMovie() {
  const getMovie = JSON.parse(localStorage.getItem("savedMovie")) || [];

  const [savedMovie, setSavedMovie] = useState(getMovie);

  const onDeleteSavedHandler = (movieID) => {
    const filteredMovie = savedMovie.filter((movie) => movie.id != movieID);
    localStorage.setItem("savedMovie", setSavedMovie);
    setSavedMovie(filteredMovie);
  };

  const { startIndex, endIndex, currentPage, totalPage, prevPage, nextPage } =
    usePagination(savedMovie, 2);

  const paginatedMovie = savedMovie?.slice(startIndex, endIndex);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Saved Movie</h1>

      {paginatedMovie.length === 0 ? (
        <p className="text-sm text-gray-500">No saved movies yet</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {paginatedMovie.map((movie) => (
            <div key={movie.id} className="relative">
              <Card movie={movie} />
              <FiDelete
                onClick={() => onDeleteSavedHandler(movie.id)}
                className="absolute bottom-2 right-2 cursor-pointer text-gray-600 hover:text-red-600"
              />
            </div>
          ))}
        </div>
      )}

      {/* <div className="flex items-center justify-between">
        <button
          onClick={() => prevPage()}
          className={`border bg-slate-600 p-2 w-80 text-white disabled:bg-slate-400`}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <button
          onClick={() => nextPage()}
          className={`border bg-slate-600 p-2 w-80 text-white `}
          disabled={currentPage === totalPage}
        >
          Next
        </button> */}

      <PaginationButton
        onNextHandler={nextPage}
        onPrevHandler={prevPage}
        totalPage={totalPage}
        currentPage={currentPage}
      />
      {/* </div> */}
    </div>
  );
}

export default SavedMovie;
