import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="h-10 w-10 rounded-full border-4 border-gray-200 border-t-gray-800 animate-spin" />
    </div>
  );
};

export default Spinner;
