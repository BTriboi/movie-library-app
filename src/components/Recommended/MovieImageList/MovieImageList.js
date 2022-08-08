import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import './MovieImageList.css'

const MovieImageList = ({genre, id}) => {

  let navigate = useNavigate();

  const [movies, setMovies] = useState([]);

  useEffect(()=>{

    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=a23d6c3660cc597118d7b7bd9ef278e8&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_genres=${id}`)
    .then ((response)=>(
      setMovies(response.data.results)
    ))

    .catch((error)=>console.log(error))

  }, [id]);


  return (

    <div className="moviesBox">

        <h2>{genre}</h2>

        
        <div className="genreMoviesListImg">

          {movies.map((movie)=>{
            return(
              <div key={movie.id} onClick={()=> navigate(`/movie/${movie.id}`)} className='imageBox'>
                <img  src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                <p>{movie.title}</p>
              </div>
          )})}


        </div>

        
        </div>
    
  )
}

export default MovieImageList