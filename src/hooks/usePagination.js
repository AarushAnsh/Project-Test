import React, { useState } from 'react'

const usePagination = (data,items_perPage) => {
    // console.log("data in  hook" ,data)
    const[page,setPage]=useState(1);

    // const items_perPage=10;  
    const totalPage = Math.ceil(data.length/items_perPage);
    const startIndex= (page-1)*items_perPage;
    const endIndex = (startIndex + items_perPage);
    
    function prevHandler(){
        setPage(prev=>prev-1)
    }
    function nextHandler(){
        setPage(prev=>prev+1)
    }

  return{
    prevHandler,
    nextHandler,
    startIndex,
    endIndex,
    totalPage,
    page
  }
}

export default usePagination
