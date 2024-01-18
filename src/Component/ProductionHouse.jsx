import React from 'react'
import disney from '../assets/images/disney.png'
import marvel from '../assets/images/marvel.png'
import nationalG from '../assets/images/nationalG.png'
import pixar from '../assets/images/pixar.png'
import starwar from '../assets/images/starwar.png'
 

import starwarV from "../assets/Videos/star-wars.mp4"

import disneyV from "../assets/Videos/disney.mp4"
import marvelV from "../assets/Videos/marvel.mp4"
import nationalGeographicV from "../assets/Videos/national-geographic.mp4"

import pixarV from '../assets/Videos/pixar.mp4'


function ProductionHouse() {
    const productionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:pixar,
            video:pixarV
        },
        {
            id:3,   
            image:marvel,
            video:marvelV
        },
        {
            id:4,
            image:starwar,
            video:starwarV
        },
        {
            id:5,
            image:nationalG,
            video:nationalGeographicV
        },]
  return (
    <div className='flex gap-5 md:gap-5 p-2 md:px-16  '>

     
        
        {
            productionHouseList.map((items,index)=>(
                <div key={index} className='border-[3px] border-gray-600 rounded-xl  hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-black shadow-lg '>
                   <video src={items.video}  autoPlay loop playsInline muted  className=' z-0 top-0 rounded-xl absolute  hover:opacity-50 opacity-0 '></video>
                   <img key={items.id} src={items.image} className='w-full  z-10 top-0   inset-0' />
               
             </div>)
            )
                  
          } 
        
    </div>
  )
}

export default ProductionHouse