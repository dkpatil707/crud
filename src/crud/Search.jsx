import React from 'react'
import { IoSearch } from "react-icons/io5";
const Search = ({handleSearch}) => {
  return (
    <div className='searchBlock'>
        <span><input type="text" placeholder='Search user with name...'
        onInput={(e)=>handleSearch(e.target.value)} /></span>
        <span className='searchIcon'><IoSearch /></span>
    </div>
  )
}

export default Search 