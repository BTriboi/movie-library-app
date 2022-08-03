import React from 'react'
import {MdArrowForwardIos} from 'react-icons/md'

const Search = () => {
  return (
    <section id="search-section">
        <p>Find movies, TV series and much more.</p>
        <div className="search-bar">
        <input type="text" placeholder="Enter the Name..."/>
        <button><MdArrowForwardIos/></button>
        </div>

    </section>
  )
}

export default Search