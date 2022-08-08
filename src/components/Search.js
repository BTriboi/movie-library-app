import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {MdArrowForwardIos} from 'react-icons/md'
import { useNavigate } from 'react-router'

const Search = ({searchId}) => {
 
  const [input, setInput] = useState('');

  function handleSubmit(){
    searchId = input;
    navigate(`/search/${searchId}`)
  }
  let navigate = useNavigate();
  useEffect(()=>{
    axios.get('')
  },[])

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