import React from 'react';
import getMovies from '../Services/api'
import Searchbar from "./Search bar/Searchbar"   
import Movie from "./Movielist/Movie"
import { useEffect, useState } from "react";

const Home = () => {

       const [movie, setMovie] = useState([]);
       const [loading, setLoading] = useState(false);
       const [error, setError] = useState(null);
       const [searchQuery, setSearchQuery] = useState("");



  //       useEffect(() => {
  //   if (searchQuery) {
  //     const getMovieResult = async () => {
  //       try {
  //         setLoading(true);
  //         const response = await fetch(
  //           "https://api.tvmaze.com/search/shows?q=" + searchQuery
  //         );
  //         const resData = await response.json();
  //         let transformData = resData.map((res) => {
  //           return res.show;
  //         });
  //         setLoading(false);
  //         setMovie(transformData);
  //       } catch (error) {
  //         console.log(error, "errorr");
  //         setLoading(false);
  //       }
  //     };

  //     getMovieResult();
  //   }
  // }, [searchQuery]);

  // api call hhoga with help of searchQuery

 
 
  useEffect(() => {
    async function fetchMovie() {
      try {
        setLoading(true);
        const movies = await getMovies();
        setMovie(movies);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, []);


  async function submitHandler(e){
      e.preventDefault();
    const url = "https://api.tvmaze.com/search/shows?q="+searchQuery;
    try{
      setLoading(true)
        const res = await fetch(url);
        const data = await res.json();

    console.log("API DATA:", data);
        const transformData = data.map((item)=>{
          return item.show
        })
         console.log("MOVIES:", transformData);
        setMovie(transformData);      
      }
    
    catch(err){
       console.log("ERROR:", err);
     setError(err.message)
    }
    finally{
      setLoading(false);
    }
   
  }






  return (
    <div>
      <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} submitHandler={submitHandler} />
      {loading && <p>Loading.....</p>}
      {error && <p>{error}</p>}
      {movie.length > 0 ? (
        <Movie movie={movie} />
      ) : (
        !loading && <p>No movies found</p>
      )}
     
    </div>
  )
}

export default Home
