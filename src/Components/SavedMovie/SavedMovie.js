import React from "react";
import Card from "../MovieCard/Card";
import { FiDelete } from "react-icons/fi";
import { useState } from "react";
import usePagination from "../../hooks/usePagination";
import PaginationButton from "../PaginationButton/PaginationButton";

function SavedMovie() {
   const getMovie = JSON.parse(localStorage.getItem("savedMovie")) || [];

    const [savedMovie,setSavedMovie] = useState(getMovie)
    
    const {prevHandler,
    nextHandler,
    startIndex,
    endIndex,
    totalPage,
    page} =usePagination(savedMovie,2)

    const Pagination  = savedMovie.slice(startIndex,endIndex)

  const onDeleteSavedHandler = (movieID) => {
  const filteredMovie = Pagination.filter(
    (movie) => movie.id !== movieID
  );

  setSavedMovie(filteredMovie);
  localStorage.setItem("savedMovie", JSON.stringify(filteredMovie));
};

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Saved Movie</h1>

      {getMovie.length === 0 ? (
        <p className="text-sm text-gray-500">No saved movies yet</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {Pagination.map((movie) => (
            <div key={movie.id} className="relative">
              <Card movie={movie} />
              <FiDelete
               onClick={()=>onDeleteSavedHandler(movie.id)}
               className="absolute bottom-2 right-2 cursor-pointer text-gray-600 hover:text-red-600" />
            </div>
          ))}
        </div>
      )}

      <PaginationButton
       onNextHandler={nextHandler}
       onPrevHandler ={prevHandler}
       totalPage={totalPage}
       page={page}
      />
    </div>
  );
}

export default SavedMovie;
