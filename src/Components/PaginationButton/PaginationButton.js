import React from 'react'
import usePagination from '../../hooks/usePagination'

const PaginationButton = ({onNextHandler,onPrevHandler,totalPage,page}) => {

  return (
    <div className='flex items-center justify-between'>
      <button 
       onClick={onPrevHandler}
       disabled={page===1}
       >Prev</button>
       
       <p>{ page}</p>
       
       
      <button
       onClick={onNextHandler}
       disabled={page===totalPage}
       >Next</button>
    </div>
  )
}

export default PaginationButton
