import React from "react";

const PaginationButton = ({
  onNextHandler,
  onPrevHandler,
  currentPage,
  totalPage,
}) => {
  return (
    <div className="flex items-center justify-between">
      <button
        onClick={onPrevHandler}
        className={`border bg-slate-600 p-2 w-80 text-white disabled:bg-slate-400`}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      <button
        onClick={onNextHandler}
        className={`border bg-slate-600 p-2 w-80 text-white `}
        disabled={currentPage === totalPage}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationButton;
