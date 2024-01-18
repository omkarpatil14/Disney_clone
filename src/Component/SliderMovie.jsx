import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GlobalApi from '../Services/GlobalApi';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';
import { HiOutlineSparkles } from "react-icons/hi";


function SliderMovie() {

    const { id, genreId } = useParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fi = movies.find((movie) => movie.id == id);
  
    useEffect(() => {
      getMovies();
    }, [genreId]);
  
    const getMovies = () => {
      setLoading(true);
      setError(null);
  
      GlobalApi.getPopularVideos
        .then((resp) => {
          setMovies(resp.data.results);
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    if (loading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>Error: {error}</p>;
      }
    
      if (!fi) {
        return <p>Movie not found</p>;
      }

     

  return (
    < >
       <div className='relative  justify-evenly gap-80 h-[100vh] pt-4  '>
        {console.log(movies)}
       
         
        <div className=' fixed  left-11  top-[70%] md:top-16 text-white md:w-[40%] w-72 md:flex flex-col  z-0 md:pt-24 hidden '>
         
        <div className='text-white font-extrabold  text-[23px] md:text-[50px] z-0  '>{fi.title}</div>
        <div className='text-white md:text-xl font-bold text-[10px] z-0 pt-5'>{fi.overview}</div>
        <div className='flex flex- row'>
        <div className='md:pt-3 md:text-lg text-[9px]  pt-2'>released date-{fi.release_date}</div>
        <div className='md:pt-3 md:text-lg text-[9px]  items-center p-4 leading-none mx-3 -3xl pt-2'>{fi.original_language}</div>
        <button className=' text-lg w-24  absoulte right-0 md:pt-3 md:flex hidden '>{fi.vote_average}<HiOutlineSparkles /></button>
        </div>
        </div>
        <img  src={IMAGE_BASE_URL + fi.backdrop_path} className='  rounded-lg w-screen hidden md:block object-contain ' />
        <img src={IMAGE_BASE_URL + fi.poster_path} className='  rounded-lg w-screen object-contain md:hidden block ' />

        {/* {phone view} */}
        <div className='   left-11  text-white md:w-[40%] w-72 flex flex-col  z-0 md:pt-24 md:hidden '>
         
        <div className='text-white font-extrabold  text-[23px] md:text-[50px] z-0  '>{fi.title}</div>
        <div className='text-white md:text-xl font-bold text-[10px] z-0 pt-5'>{fi.overview}</div>
        <div className='flex flex- row'>
        <div className='md:pt-3 md:text-lg text-[9px]  pt-2'>released date-{fi.release_date}</div>
        <div className='md:pt-3 md:text-lg text-[9px]  items-center p-4 leading-none mx-3 -3xl pt-2'>{fi.original_language}</div>
        <button className=' text-lg w-24  absoulte right-0 md:pt-3 md:flex hidden '>{fi.vote_average}<HiOutlineSparkles /></button>
        </div>
        </div>
        
        
        
        
        
         
      </div> 
    </>
  )
}

export default SliderMovie