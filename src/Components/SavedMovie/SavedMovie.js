import React from "react";
import Card from "../MovieCard/Card";
import { FiDelete } from "react-icons/fi";
import { useState } from "react";

function SavedMovie() {
   const getMovie =
    JSON.parse(localStorage.getItem("savedMovie")) || [];


    const [savedMovie,setSavedMovie] = useState(getMovie || [])
  //   useEffect state update (sideeffect )
  //   const onDeleteSavedHandler = (movieID)=> {
  //     const filteredMovie = getMovie.filter((movie)=>movie.id!=movieID) 
  //     localStorage.setItem("savedMovie",filteredMovie)
  //     setMovie()
  //   }


  const onDeleteSavedHandler = (movieID) => {
  const filteredMovie = savedMovie.filter(
    (movie) => movie.id !== movieID
  );

  setSavedMovie(filteredMovie);
  localStorage.setItem("savedMovie", JSON.stringify(filteredMovie));
};

  return (
    <>
      <div>SavedMovie</div>
      <div>
        {getMovie.map((movie) => (
          <>
            <Card movie={movie} />
            <FiDelete onClick={() => onDeleteSavedHandler(movie.id)} />
          </>
        ))}
      </div>
    </>
  );
}

export default SavedMovie;
