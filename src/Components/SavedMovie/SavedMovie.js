import React from "react";
import Card from "../MovieCard/Card";
import { FiDelete } from "react-icons/fi";

function SavedMovie() {
  const getMovie = JSON.parse(localStorage.getItem("savedMovie")) || [];

  //   const [savedMovie,setSavedMovie] = useState(getMovie)
  //   useEffect state update (sideeffect )
  //   const onDeleteSavedHandler = (movieID)=> {
  //     const filteredMovie = getMovie.filter((movie)=>movie.id!=movieID)
  //     localStorage.setItem("savedMovie",filteredMovie)
  //     setMovie()
  //   }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Saved Movie</h1>

      {getMovie.length === 0 ? (
        <p className="text-sm text-gray-500">No saved movies yet</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {getMovie.map((movie) => (
            <div key={movie.id} className="relative">
              <Card movie={movie} />
              <FiDelete className="absolute bottom-2 right-2 cursor-pointer text-gray-600 hover:text-red-600" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SavedMovie;
