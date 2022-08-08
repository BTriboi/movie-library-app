import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Search from '../Search'
import { useParams } from 'react-router';

const SearchPage = () => {
  let { searchId } = useParams();

  const [search, setSearch] = useState('');

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/search/${searchId}?api_key=a23d6c3660cc597118d7b7bd9ef278e8&language=en-US&page=1&include_adult=false`)
    .then((res)=>(
      setSearch(res)
      ));
  },[searchId])

  console.log(search);
  return (
    <section id="search-page">
      <Search searchId={searchId}/>
      {search.map}
    </section>
  )
}

export default SearchPage