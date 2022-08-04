import React from 'react'

const MovieImageList = ({genre}) => {
  return (

    <div className="moviesBox">

        <h2>{genre}</h2>

        
        <div className="genreMoviesListImg">

        <div className='imageBox'></div>
        <div className='imageBox'></div>
        <div className='imageBox'></div>
        <div className='imageBox'></div>
        <div className='imageBox'></div>
        <div className='imageBox'></div>

        </div>

        
        </div>
    
  )
}

export default MovieImageList