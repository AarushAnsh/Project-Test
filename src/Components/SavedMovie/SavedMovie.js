import React from "react";
import Card from "../MovieCard/Card";
import { FiDelete } from "react-icons/fi";

function SavedMovie() {
  const getMovie = JSON.parse(localStorage.getItem("savedMovie"));


  //   const [savedMovie,setSavedMovie] = useState(getMovie)
  //   useEffect state update (sideeffect )
  //   const onDeleteSavedHandler = (movieID)=> {
  //     const filteredMovie = getMovie.filter((movie)=>movie.id!=movieID) 
  //     localStorage.setItem("savedMovie",filteredMovie)
  //     setMovie()
  //   }


  return (
    <>
      <div>SavedMovie</div>
      <div>
        {getMovie.map((movie) => (
          <>
            <Card movie={movie} />
            <FiDelete  />
          </>
        ))}
      </div>
    </>
  );
}

export default SavedMovie;
