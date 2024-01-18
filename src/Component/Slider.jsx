import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
// import { nanoid } from '@reduxjs/toolkit'
const IMAGE_URL="http://image.tmdb.org/t/p/original"
import { HiChevronLeft,HiChevronRight } from "react-icons/hi";
import { NavLink } from 'react-router-dom';

const screen =window.innerWidth;
function Slider() {
     const [movieList, setMovieList]= useState([]);
     const elementRef= useRef()
     
    useEffect(()=>{
    getPopularMovies()
    },[])

    const getPopularMovies=()=>{
        GlobalApi.getPopularVideos.then((resp)=>{
           
            setMovieList(resp.data.results)
        })
        
      }
      const sliderRight=(element)=>{
        element.scrollLeft+=screen-64
      }
      const sliderLeft=(element)=>{
        element.scrollLeft-=screen-64
      }
    
  return (
    <div className='mt-12'>
        <HiChevronLeft className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer size-[100px] opacity-45  hover:opacity-85 z-30 " 
        onClick={()=>sliderLeft(elementRef.current)}/>
        <HiChevronRight className='hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer right-0 size-[100px] opacity-45  hover:opacity-85 z-30' 
        onClick={()=>sliderRight(elementRef.current)}/>
        

       

        <div className='flex overflow-x-auto md:w-full  md:px-16 px-5 py-4  scrollbar-hide scroll-smooth  md:gap-6 gap-2 ' ref={elementRef}>
          
   { 
     
    movieList.map((item,index)=>(
        <NavLink key={index} to={`/SliderMovie/${item.id}`} className="flex-none md:min-w-full  md:h-[400px] h-[250px] md:mr-5 md:object-left-top relative ">
           <img  src={IMAGE_URL+item.backdrop_path}
        className=' w-[80%] md:min-w-full md:h-[400px] h-[250px] object-cover md:object-left-top mr-5 rounded-lg object-center  hover:scale-[1.03] border-gray-600 transition-all duration-100 ease-in shadow-lg shadow-black  z-20'/>
          <div className='text-white absolute bottom-8 scale-150 left-28 font-bold  md:flex hidden ]'>{item.title}</div>
        </NavLink>  
    ))
   }
    </div>
    </div>
  )
}

export default Slider