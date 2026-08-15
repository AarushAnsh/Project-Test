import { useState } from "react";

const usePagination = (data, itemPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPage = data.length / itemPerPage;
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;

  const nextPage = () => {
    if (currentPage !== totalPage) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage((prev) => prev - 1);
  };

  return {
    startIndex,
    endIndex,
    currentPage,
    totalPage,
    prevPage,
    nextPage,
  };
};

export default usePagination;
