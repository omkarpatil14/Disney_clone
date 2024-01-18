import React from 'react'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
import { HiStar } from "react-icons/hi";
function MovieCard({movie}) {
  return (
    <>
       {/* {console.log({movie})} */}
     
       < div className='relative'  >
       {/* {console.log({movie})} */}
     
     <img src={IMAGE_BASE_URL+movie.poster_path} 
        className='w-[110px] md:w-[240px] rounded-lg
        border-[3px] border-gray-500 cursor-pointer flex flex-wrap 
        hover:scale-110 transition-all duration-100 ease-in shadow-black shadow-lg '/>
        
        <div className='text-white absolute bottom-3 left-3  p-1  flex justify-center items-center'  >{movie.vote_average
} <HiStar /></div>
     

       
        
    </div>
     

       
        
    </>
  )
}

export default MovieCard