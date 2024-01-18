import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
const IMAGE_URL="http://image.tmdb.org/t/p/original"
import { NavLink } from "react-router-dom";
import AllMoviesCard from "./AllMoviesCard";
import { FallingLines } from 'react-loader-spinner'

function AllTv() {
    const [MovieList, SetMovieList] = useState([]);
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
      getMovies();
    }, []);
  
    const getMovies = () => {
      setLoading(true);
      setError(null);
      GlobalApi.getTV
        .then(
          (resp) => (
            console.log(resp.data.results), 
            SetMovieList(resp.data.results)
          )
        )
        .catch((error) => {
          setError(error.message);
          console.log("error found")
        })
        .finally(() => {
          setLoading(false);
        });
  
      if (loading) {
        return <p>Loading...</p>;
      }
  
      if (error) {
        return <p>Error: {error}</p>;
      }
  
      if (!MovieList) {
        return <p>Movie not found</p>;
      }
    };
  
    return (
    <>
    {
      loading? <FallingLines
      color="#4fa94d"
      width="100"
      visible={true}
      ariaLabel="falling-circles-loading"
      />:<div className="flex  overflow-x-auto h-screen flex-wrap md:gap-8 justify-evenly pt-4   gap-5  md:mt-16">
      {
       MovieList.map((movie,index)=>(
         <NavLink key={index} to={`/AllTvPage/${movie.id}`} className="flex-none">
         <AllMoviesCard movie={movie}/>
       </NavLink>
       ))
      }
 </div>
    }
    </>)
  }

export default AllTv