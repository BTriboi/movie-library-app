import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Search from '../Search'
import { useParams } from 'react-router';
import './SearchPage.css'
import SectionType from '../SectionType';
import {HiArrowSmLeft, HiArrowSmRight} from 'react-icons/hi';
import { useNavigate } from 'react-router';

const SearchPage = () => {
  let { searchId } = useParams();

  let navigate = useNavigate();


  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(()=>{
    setLoading(true)
    axios.get(`https://api.themoviedb.org/3/search/multi?api_key=a23d6c3660cc597118d7b7bd9ef278e8&language=en-US&query=${searchId}&page=${page}&include_adult=false`)
    .then((res)=>{

      setSearch(res.data.results)
      setLoading(false);

    });

  },[searchId, page]);


  console.log(search);

  
  function incrementPage (e){
    e.preventDefault();
    if(search.length === 20){
      
      setPage(page+1);
    }
  }

  function decrementPage (e){

    e.preventDefault();
    if(page > 1){
      setPage(page-1);
    }
  }


  return (
    <>
    <Search/>
      <SectionType type = "Search"/>
    
      <section id="discover-section">
            {
        !loading ? 
        <>

       <div className="button-pager">
          <div className='' onClick={decrementPage}><HiArrowSmLeft/></div>
          <span>{page}</span>
          <div onClick={incrementPage}><HiArrowSmRight/></div>
        </div>
        
        
        
        <div id="movies-wrapper">


        {search.map((movie)=>(

          <div key={movie.id} className="movie-box"  onClick={()=> navigate(movie.media_type === 'movie' ? `/movie/${movie.id}` : `/series/${movie.id}`)}>
            <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt= ""/>
             
            <p>{movie.title}</p>
          </div>
          
        ))}

        </div> 

        <div className="button-pager">
          <div className='' onClick={decrementPage}><HiArrowSmLeft/></div>
          <span>{page}</span>
          <div onClick={incrementPage}><HiArrowSmRight/></div>
        </div>
        
        


        </>
        : <p>Loading...</p> 
      }

      

      
    </section>
    </>
  )
}

export default SearchPage