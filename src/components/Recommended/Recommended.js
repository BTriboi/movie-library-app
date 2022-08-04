import React from 'react'
import MovieImageList from './MovieImageList'

const Recommended = () => {
  return (
    <section id="recommended-section">

        <h3>Recommended</h3>
        
        <hr id="sep-line"/>


        <MovieImageList genre = "Action"/>
        <MovieImageList genre = "Shows"/>
        <MovieImageList genre = "Sitcoms"/>



    </section>
  )
}

export default Recommended