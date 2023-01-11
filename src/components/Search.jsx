import React, { useEffect } from 'react'

export default function Search({setSearch, setCategory, setPage}) {

  const handleEnterKey = (e) => {
        if(e.keyCode === 13){
            e.preventDefault();
            setSearch(e.target.value)
            setPage(1)
            e.target.blur();
        }
  }

  const handleSelection = (e) => {
    e.preventDefault()
    setCategory(e.target.value)
    setPage(1)
  }


  return (
    <div className='flex px-4 rounded-3xl w-[20rem] h-[2.8rem] bg-[#F2F2F9] border border-slate-300 items-center'>
      <input type="text" className='border-none outline-none w-[60%] bg-transparent' onKeyUp={handleEnterKey} placeholder='Search' />
      <select name="Category" id="selector" onChange={handleSelection} className='outline-none border-l-2 px-2 text-slate-400 bg-transparent border-slate-300 w-[40%]'>
      <option disabled selected value="">Categories</option>
      <option value="backgrounds">Backgrounds</option>
      <option value="nature">Nautre</option>
      <option value="animals">Animals</option>
      <option value="food">food</option>
      <option value="travel">travel</option>
      <option value="">none</option>
      </select>
    </div>
  )
}
