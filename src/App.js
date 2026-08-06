import logo from './logo.svg';
import getMovies from './Services/api'

import Navbar from './Components/Navbar';
import Searchbar from './Components/Search bar/Searchbar';
import Movie from './Components/Movielist/Movie';
import { useEffect, useState } from 'react';

function App() {

  const [movie,setMovie]=useState([]);
  const[loading,setLoading]=useState(false);
  const[error,setError]=useState(null);
  
   useEffect(()=>{
    async function fetchMovie() {

      try{
         setLoading(true)
         const movies = await getMovies();
          setMovie(movies);
      } catch(err){
        setError(err);
      } finally{
        setLoading(false)
      }
    }
    fetchMovie();
   },[])

  return (
    <div>
      
      <Navbar/>
      <Searchbar/>
      {loading ? (<p>Loading.....</p>) : error ? (<p>{error}</p>):(<Movie movie={movie}/>)}
      
    </div>
  );
}

export default App;
