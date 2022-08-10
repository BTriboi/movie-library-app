import React, {useState } from 'react'
import {MdArrowForwardIos} from 'react-icons/md'
import { useNavigate } from 'react-router'

const Search = ({searchId}) => {
 
  const [input, setInput] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    searchId = input;
    navigate(`/search/${searchId}`);
  }

  let navigate = useNavigate();

  return (
    <section id="search-section">
        <p>Find movies, TV series and much more.</p>
          <form className="search-bar" onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter the Name..." onChange={(e)=>setInput(e.target.value)}/>
        <button><MdArrowForwardIos/></button>
          </form>

    </section>
  )
}

export default Search