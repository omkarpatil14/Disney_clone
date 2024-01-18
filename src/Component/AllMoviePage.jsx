import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GlobalApi from '../Services/GlobalApi';
import { HiOutlineSparkles, HiStar } from 'react-icons/hi';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

function AllMoviePage() {
  const { id, genreId } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovies();
  }, [genreId]);

  const getMovies = () => {
    setLoading(true);
    setError(null);

    GlobalApi.getAllMovies
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

  const fi = movies.find((movie) => movie.id == id);

  if (loading) {
    return (
      <div className="loading-container">
        <p>Loading...</p>
        {/* You can replace this with your loading animation or image */}
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!fi) {
    return <p>Movie not found</p>;
  }
  
  return (
    <div className='relative  justify-evenly gap-80 h-[100vh]  '>
    {console.log(movies)}
   
    <img  src={IMAGE_BASE_URL + fi.backdrop_path} className='  rounded-lg w-screen hidden md:block object-contain ' />
    <img src={IMAGE_BASE_URL + fi.poster_path} className='  rounded-lg w-screen object-contain md:hidden block ' />
     
    <div className='  absolute left-11  top-[70%] md:top-16 text-white md:w-[40%] w-72 md:flex flex-col  z-0 md:pt-24 hidden '>
     
    <div className='text-white font-extrabold  text-[23px] md:text-[50px] z-0  '>{fi.title}</div>
    <div className='text-white md:text-xl font-bold text-[10px] z-0 pt-5'>{fi.overview}</div>
    <div className='flex flex- row   items-center  gap-16 mt-6 '>
    <div className=' md:text-lg text-[9px]  '>released date-{fi.release_date}</div>
    <div className=' md:text-lg text-[9px]  items-center leading-none  '>{fi.original_language}</div>
    <button className=' text-lg   absoulte right-0  md:flex hidden justify-center items-center '>{fi.vote_average}<HiStar/></button>
    </div>
    </div>
    

    {/* {phone view} */}
    <div className='  md:hidden left-11  text-white md:w-[40%] w-72 flex flex-col  z-0 md:pt-24 '>
     
    <div className='text-white font-extrabold  text-[23px] md:text-[50px] z-0  '>{fi.title}</div>
    <div className='text-white md:text-xl font-bold text-[10px] z-0 pt-5'>{fi.overview}</div>
    <div className='flex flex- row'>
    <div className='md:pt-3 md:text-lg text-[9px]  pt-2'>released date-{fi.release_date}</div>
    <div className='md:pt-3 md:text-lg text-[9px]  items-center p-4 leading-none mx-3 -3xl pt-2'>{fi.original_language}</div>
    <button className=' text-lg w-24  absoulte right-0 md:pt-3 md:flex hidden '>{fi.vote_average}<HiOutlineSparkles /></button>
    </div>
    </div>
    
    
    
    
     
  </div>
  )
}

export default AllMoviePage