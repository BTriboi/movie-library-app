import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MovieImageList = ({genre, id}) => {

  const [movies, setMovies] = useState([]);

  useEffect(()=>{

    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=a23d6c3660cc597118d7b7bd9ef278e8&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_genres=${id}`)
    .then ((response)=>(
      setMovies(response.data.results)
    ))

    .catch((error)=>console.log(error))

  }, [id]);



console.log(movies);

  return (

    <div className="moviesBox">

        <h2>{genre}</h2>

        
        <div className="genreMoviesListImg">

          {movies.map((movie)=>{
            return(
          <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" className='imageBox'/>
          )})}


        </div>

        
        </div>
    
  )
}

export default MovieImageList