import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './Series.css'
import {HiArrowSmLeft, HiArrowSmRight} from 'react-icons/hi';
import { useNavigate } from "react-router-dom";
import Search  from './../Search';
import SectionType from './../SectionType'

const Series = () => {
    
  const [page, setPage] = useState(1);
  
  function incrementPage (e){
    e.preventDefault();
    setPage(page+1);
    console.log(page)
  }

  function decrementPage (e){

    e.preventDefault();
    if(page > 1){
      setPage(page-1);
    }
  }

// Navigate function to navigate on click to the movie page
let navigate = useNavigate();

  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=a23d6c3660cc597118d7b7bd9ef278e8&language=en-US&page=${page}`)
    .then((response)=>{
      setSeries(response.data.results);
      setLoading(false)
  })

  },[page])

  return (

    
    <>
    <Search/>
      <SectionType type = "TV Series"/>
    
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


        {series.map((serie)=>(

          <div key={serie.id} className="movie-box"  onClick={()=> navigate(`/series/${serie.id}`)}>
            <img src={`http://image.tmdb.org/t/p/w500/${serie.poster_path}`} alt= ""/>
             
            <p>{serie.name}</p>
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

export default Series