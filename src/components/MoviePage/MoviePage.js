import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MoviePage.css"
import {FaPlay} from 'react-icons/fa'
import {AiFillStar} from 'react-icons/ai'
import { useNavigate } from "react-router-dom";


const MoviePage = () => {

  let navigate = useNavigate();


  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState([]);
  const [countries, setCountries] = useState([]);
  const [trending, setTrending] = useState([]);

  let { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a23d6c3660cc597118d7b7bd9ef278e8&language=en-US`)
    .then((res)=>{
      setMovie(res.data)
      setLoading(false);
      setGenre(res.data.genres);
      setCountries(res.data.production_countries)
    })
    
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=a23d6c3660cc597118d7b7bd9ef278e8`)
    .then((res)=>{
      setTrending(res.data.results);
    })
  }, [movieId]);


  return (
    <section id="movie-page">
      {loading?<>Loading...</>:<>
      <h1>{movie.title}</h1>

      {
  movie.backdrop_path !== null && 
  
  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer" id="poster-redirect">
  <div className="player-wrapper">
  
  <img className="video-poster" src={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt=""/>
  
  <FaPlay id="play-button"/>
  
  </div>
  
  </a>
  
}


<div id="info-wrapper">

<div>

<div id="movie-info-box">
    <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>

  <div>
    <h2>{movie.original_title}</h2>
    <ul>
      <li><h4><AiFillStar id="grade-star"/>{movie.vote_average}</h4></li>
      <li>{movie.runtime} min</li>
    </ul>
    <p>{movie.overview}</p>
  </div>

</div>

<div id="movie-data">
    <ul>
      <li>Genre: {genre.map((item) => {
        return (
          <span key={item.id}>{item.name}, </span>
        )
      })}</li>
      <li>Release: <span>{movie.release_date}</span> </li>
      <li>Country: {countries.map(country => (<span key={country.id}>{country.name}</span>))} </li>
      <li>Status:  <span>{movie.status}</span></li>
    </ul>
</div>

</div>

<div id="recommended-movies-list">

  <h2>Trending this week:</h2>
  <ul>
  {trending.map((movie)=>{
  return(
  <li key={movie.id} onClick={()=> navigate(movie.media_type === 'movie' ? `/movie/${movie.id}` : `/series/${movie.id}`)}>
    <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>
  <p>{movie.title}</p>
  </li>)
  })}
  </ul>
  

</div>



</div>
        
      
      </>}
        
    </section>
  );

}
export default MoviePage;