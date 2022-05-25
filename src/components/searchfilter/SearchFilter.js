import React from 'react'
import './searchfilter.css'

const SearchFilter = ({onChange,placeholder}) => {
  return (
    <div className="search-filter py-5">

        <input type="search" className="form-control" placeholder={placeholder} aria-label="Search" onChange={onChange}></input>



    </div>

    


    )
}

export default SearchFilter