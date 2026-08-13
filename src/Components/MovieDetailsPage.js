import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetailsPage = () => {
     const{id} = useParams();

     const [movie,setMovie]=useState(null);
     const[loader,setLoader]=useState(false);
     const[err,setErr]=useState(null);
     async function fetchData(params) {
       const url =`https://api.tvmaze.com/shows/${id}`;
       const data = await fetch(url);
       const res = await data.json();  
        setMovie(res);   
     }
     useEffect(()=>{
      fetchData();
     },[id])
    

  return (
   
    <div>
       {
        movie && 
        (
            <div>
             <img src={movie?.image?.medium} />
             <h3>{movie?.name}</h3>
             <h3>{movie?.id}</h3>
             <h3>{movie?.type}</h3>
              <h3>{movie?.runtime}</h3>
              <h3>{movie.language}</h3>
              <p>{movie.summary}</p>
            </div>
        )
        

       }
    </div>
  )
}

export default MovieDetailsPage;
