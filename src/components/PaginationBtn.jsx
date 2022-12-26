import React from 'react'

export const PaginationBtn = ({currPage, pageNo, setPage}) => {
  return (
    <div className={`py-1 px-2 cursor-pointer border hover:bg-[#F2F2F7] border-black rounded-md ${(currPage === pageNo) ? 'bg-[#000] text-white' : 'bg-white'}`} onClick={() => setPage(pageNo)}>
    {pageNo}
    </div>
  )
}
