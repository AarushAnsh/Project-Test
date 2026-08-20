import axios from "axios";

export const fetchSearchedData = async (query) => {
  try {
    const getMovieData = await axios(
      `https://api.tvmaze.com/search/shows?q=${query}`
    );

    const transformMovieData = getMovieData.data.map((movie) => {
      return movie.show;
    });
    //   setFilterMovie(transformMovieData);
    return transformMovieData;
  } catch (error) {
    console.log(error.message);
  }
};
