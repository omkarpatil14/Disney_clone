import React from 'react'
import Slider from './Slider'
import ProductionHouse from './ProductionHouse'
import GenreMovieList from './GenreMovieList'
function HomePage() {
  return (
    <div>
        <Slider/>
        <ProductionHouse/>
        <GenreMovieList/>
    </div>
  )
}

export default HomePage