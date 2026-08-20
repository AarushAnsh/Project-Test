import React, { useEffect, useMemo, useState } from "react";
import Movie from "./Movielist/Movie";
import useFetch from "../hooks/useFetch";
import Spinner from "./Spinner";
import usePagination from "../hooks/usePagination";
import PaginationButton from "./PaginationButton/PaginationButton";
import axios from "axios";

const Home = ({ languages = [] }) => {
  const [searchKey, setSearchKey] = useState("");

  const {
    data: movie,
    error,
    loading,
  } = useFetch("https://api.tvmaze.com/shows");

  //map,filter,reduce -> array , => new array

  const [filterMovie, setFilterMovie] = useState([]);

  useEffect(() => {
    if (movie.length > 0) setFilterMovie(movie);
  }, [movie]);

  const fetchSearchedData = async (query) => {
    try {
      const getMovieData = await axios(
        `https://api.tvmaze.com/search/shows?q=${query}`
      );
      const transformMovieData = getMovieData.data.map((movie) => {
        return movie.show;
      });
      setFilterMovie(transformMovieData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (searchKey) fetchSearchedData(searchKey);
    else setFilterMovie(movie);
  }, [searchKey]);

  const [filterType, setFilterType] = useState("");
  const [ratingThreshold, setRatingThreshold] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const visibleMovies = useMemo(() => {
    let result = filterMovie;

    if (filterType === "rating" && ratingThreshold !== "") {
      const threshold = Number(ratingThreshold);
      result = result.filter(
        (m) => (m?.rating?.average ?? -Infinity) > threshold
      );
    }

    if (selectedLanguages.length > 0) {
      result = result.filter((m) => selectedLanguages.includes(m.language));
    }

    return result;
  }, [filterMovie, filterType, ratingThreshold, selectedLanguages]);

  const { startIndex, endIndex, currentPage, totalPage, prevPage, nextPage } =
    usePagination(visibleMovies, 5);

  const onSearchHandler = (e) => {
    setSearchKey(e.target.value);
  };

  const paginatedMovie = visibleMovies?.slice(startIndex, endIndex);

  const onFilterTypeHandler = (e) => {
    setFilterType(e.target.value);
    if (e.target.value !== "rating") setRatingThreshold("");
  };

  const onRatingThresholdHandler = (e) => {
    setRatingThreshold(e.target.value);
  };

  const onLanguageToggleHandler = (language) => {
    setSelectedLanguages((prev) =>
      prev.includes(language)
        ? prev.filter((lang) => lang !== language)
        : [...prev, language]
    );
  };

  const onSelectHandler = (e) => {
    const selectedSortBy = e.target.value;
    if (selectedSortBy === "default") {
      if (searchKey) fetchSearchedData(searchKey);
      else setFilterMovie(movie);
      return;
    }
    const sortMovie = [...filterMovie].sort((a, b) => {
      if (selectedSortBy === "rating")
        return b?.rating?.average - a?.rating?.average;
      else
        return selectedSortBy === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
    });
    setFilterMovie(sortMovie);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* <Searchbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        submitHandler={submitHandler}
      /> */}
      {loading && <Spinner />}
      {error && <p className="text-sm text-red-600">Something went wrong</p>}
      <div className="flex flex-wrap items-end gap-4">
        <div className="w-60">
          <label
            htmlFor="search"
            className="block mb-2.5 text-sm font-medium text-gray-700"
          >
            Search
          </label>
          <input
            id="search"
            onChange={onSearchHandler}
            value={searchKey}
            className="block w-full border border-gray-300 outline-none rounded-md p-1.5 focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
            placeholder="Search Movie..."
          />
        </div>

        <div className="w-60">
          <label
            htmlFor="orderby"
            className="block mb-2.5 text-sm font-medium text-gray-700"
          >
            Sort By
          </label>
          <select
            id="orderby"
            className="block w-full px-3 py-2.5 bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
            onChange={onSelectHandler}
          >
            <option value="default">Select an option</option>
            <option value="rating">Rating</option>
            <option value="asc">A to Z</option>
            <option value="desc">Z to A</option>
          </select>
        </div>
      </div>

      <div className="flex flex-wrap items-start gap-4">
        <div className="w-60">
          <label
            htmlFor="filterby"
            className="block mb-2.5 text-sm font-medium text-gray-700"
          >
            Filter By
          </label>
          <select
            id="filterby"
            className="block w-full px-3 py-2.5 bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
            onChange={onFilterTypeHandler}
            value={filterType}
          >
            <option value="">Select an option</option>
            <option value="rating">Rating</option>
          </select>

          {filterType === "rating" && (
            <input
              type="number"
              step="0.1"
              placeholder="Rating greater than..."
              value={ratingThreshold}
              onChange={onRatingThresholdHandler}
              className="block w-full mt-2 border border-gray-300 outline-none rounded-md p-1.5 focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
            />
          )}
        </div>

        {languages.length > 0 && (
          <div className="w-60">
            <span className="block mb-2.5 text-sm font-medium text-gray-700">
              Language
            </span>
            <div className="flex flex-col gap-1.5">
              {languages.map((language) => (
                <label
                  key={language}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <input
                    type="checkbox"
                    checked={selectedLanguages.includes(language)}
                    onChange={() => onLanguageToggleHandler(language)}
                  />
                  {language}
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      {movie.length > 0 ? (
        <Movie movie={paginatedMovie} />
      ) : (
        !loading && <p className="text-sm text-gray-500">No movies found</p>
      )}

      <PaginationButton
        onNextHandler={nextPage}
        onPrevHandler={prevPage}
        totalPage={totalPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Home;
