
// axios get method return promises so use promises consumers in order to use data
import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='2ec0d66f5bdf1dd12eefa0723f1479cf'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';

    const getPopularVideos= axios.get("https://api.themoviedb.org/3/movie/popular?api_key=d107630e7051d3bfb8b11945e3a5d45e");
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

    const getAllMovies= axios.get("https://api.themoviedb.org/3/discover/movie?api_key=d107630e7051d3bfb8b11945e3a5d45e")
    const getTV= axios.get("https://api.themoviedb.org/3/discover/tv?api_key=d107630e7051d3bfb8b11945e3a5d45e")

export default{
   getPopularVideos,
    getMovieByGenreId,
    getAllMovies,
    getTV
}
