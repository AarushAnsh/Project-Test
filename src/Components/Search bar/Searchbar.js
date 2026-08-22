import React from "react";

const Searchbar = ({ searchQuery, setSearchQuery, submitHandler }) => {
  return (
    <div className="mb-6">
      <form onSubmit={submitHandler} className="flex gap-2">
        <input
          type="text"
          placeholder="Moviee Name"
          name="Movie_Search"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-gray-500"
        />
        <button className="bg-gray-900 text-white text-sm rounded px-4 py-2 hover:bg-gray-700">
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
