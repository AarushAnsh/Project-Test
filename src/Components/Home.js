import React, { useContext, useEffect, useState } from "react";
import Searchbar from "./Search bar/Searchbar";
import Movie from "./Movielist/Movie";
import useFetch from "../hooks/useFetch";
import PaginationButton from "./PaginationButton/PaginationButton";
import usePagination from "../hooks/usePagination";
// import { MovieContext } from "../Context/MoveData";
import "./Home.css"
import axios from "axios";
import { FcCdLogo } from "react-icons/fc";

const Home = () => {
  // const {
  //   movie,
  //   setMovie,
  //   loading,
  //   error,
  //   searchQuery,
  //   setSearchQuery,
  //   submitHandler,
  // } = useContext(MovieContext);
  
  const {
    data: movie,
    error,
    loading,
  } = useFetch("https://api.tvmaze.com/shows");
  
   const[searchKey,setSearchkey]=useState("");
   const[searchMovie,setSearchMovie]=useState([]);
   const[sortBy,setSortBy]=useState("")
   const[genre,setGenre]=useState("");
  
   console.log(searchMovie,"searchmovie")
   function searchHandler(e){
     console.log(e.target.value)
  
       setSearchkey(e.target.value)

   }

   useEffect(()=>{
    async function searchFilter(){
      try{
        
        const url = `https://api.tvmaze.com/search/shows?q=${searchKey}`;
        const res = await axios(url);
        console.log(res,"response")
        
        const transformdata = res.data.map((item)=>item.show)
         console.log(transformdata,"transfrom data")
        setSearchMovie(transformdata )
      }catch(err){
        console.log(err.message)
      } 
    }
 
     if(searchKey) searchFilter()
      else{
       setSearchMovie(movie || []) 
    }
   },[searchKey,movie])
    
    const sortedMovie = [...searchMovie].sort((a,b)=>{
    if(sortBy === "atoz"){
      return a.name.localeCompare(b.name);
    }
    if(sortBy === 'ztoa'){
      return b.name.localeCompare(a.name);
    }
    return 0;
  })

   const allGenre = [...new Set (sortedMovie.flatMap((movie)=>movie.genres))]
  // console.log("allgenre",allGenre)

  const filteredMovie = sortedMovie.filter((item)=> genre==="" ? true:item.genres.includes(genre)) 

   const {prevHandler,nextHandler,startIndex,endIndex,page,totalPage} = usePagination(filteredMovie,10);
   


  
   const Pagination = filteredMovie.slice(startIndex,endIndex);
  //  console.log("pagination",Pagination)

  

  return (
    <div className="">

      {/* <Searchbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        submitHandler={submitHandler}
      /> */}
      <input
        type="text"
        placeholder="Search Movie..."
        onChange={searchHandler}
        value={searchKey}
      />

      <select onChange={(e)=>setSortBy(e.target.value)}>
        <option value=''>Sort by:</option>
        <option value="atoz">A to Z</option>
        <option value="ztoa">Z to A</option>
      </select>

      <select onChange={(e)=>setGenre(e.target.value)}>
        <option value={""}>Select Genre:</option>
        {
          allGenre.map((item)=> (
            <option key={item} value={item}> {item} </option>
          ))
        }
      </select>

      
      {loading && <p className="text-sm text-gray-500">Loading.....</p>}
      {error && <p className="text-sm text-red-600">Something went wrong</p>}
      {Pagination.length > 0 ? (
        <Movie movie={Pagination} />
      ) : (
        !loading && <p className="text-sm text-gray-500">No movies found</p>
      )}
      <PaginationButton      
        onNextHandler ={nextHandler}
        onPrevHandler ={prevHandler}
        totalPage={totalPage}
        page={page}      
      />
    </div>
  );
};

export default Home;
