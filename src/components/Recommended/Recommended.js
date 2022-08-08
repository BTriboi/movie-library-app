import axios from 'axios'
import React, {useEffect, useState} from 'react'
import MovieImageList from './MovieImageList'
import './Recommended.css'
import Search  from './../Search';
import SectionType from './../SectionType'



const Recommended = () => {

// const getSearchLink = 'https://api.themoviedb.org/3/genre/movie/list?api_key=a23d6c3660cc597118d7b7bd9ef278e8&language=en-US' 

const [movieGenre, setMovieGenre] = useState([]);


// Fetch list of genres + their names to display as title on recommended page

useEffect(() => {
  axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=a23d6c3660cc597118d7b7bd9ef278e8&language=en-US")
  .then((response)=>{
    setMovieGenre(response.data.genres)
  })
}, [])


  return (

    <>
      
      <Search/>
      <SectionType type = "Recommended"/>
    <section id="recommended-section">
      
      
      <>

       {movieGenre.map((genre) => (
       <MovieImageList id={genre.id} key={genre.id} genre={genre.name}/>
       ))}
       
       </>
        



    </section>
    </>
    
  )
}

export default Recommended