import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { NavLink } from "react-router-dom";

import MovieCard from "./AllMoviesCard"
import AllMoviesCard from "./AllMoviesCard";
const IMAGE_URL="http://image.tmdb.org/t/p/original"

function AllMovies() {
  const [MovieList, SetMovieList] = useState([]);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getMovies();
    console.log("DONE")
  }, []);

  const getMovies = () => {
    setLoading(true);
    setError(null);
    GlobalApi.getAllMovies
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

  return <div className="flex  overflow-x-auto h-screen flex-wrap md:gap-8 justify-evenly pt-4  md:mt-16 gap-5">
       {
        MovieList.map((movie,index)=>(
           <NavLink key={index} to={`/AllMoviesPage/${movie.id}`} className="flex-none">
             <AllMoviesCard movie={movie}/>
           </NavLink>
        ))
       }
  </div>;
}

export default AllMovies;
