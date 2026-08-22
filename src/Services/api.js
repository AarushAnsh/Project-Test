import axios from "axios";

async function getMovies() {
     const url = "https://api.tvmaze.com/shows";

     try{
        const response = await axios.get(url);
        if(!response.ok){
            throw new Error("failed to fetch Movie");         
        }
        const data = await response.json();
        return data;
     }
     catch(err){
        throw err;
     }
    
}
export default getMovies;