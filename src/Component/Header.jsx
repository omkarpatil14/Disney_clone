import React from "react";
import logo from "../assets/images/logo.png";
import user from "../Component/user.png";
import {

  HiStar,
  HiPlayCircle,
  HiTv,
  HiPlus,
  HiOutlineUser,
} from "react-icons/hi2";

import { HiMenuAlt3,HiOutlineHome } from "react-icons/hi";
import { useState } from "react";

import HeaderItem from "./HeaderItem";
import { NavLink } from "react-router-dom";

function Header() {
  const [toggle, setToggle] = useState(false);
  const[IdToggle,setIdToggle]= useState(false)

  const menu = [
    {
      name: "HOME",
      icon:HiOutlineHome,
    },

    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className=" flex   gap-8   md:pt-3 pt-10 justify-center items-center   ">
      <div className=" flex  items-center gap-8  m-3  bg-gray-950 p-3 rounded-xl  md:mt-[90px] fixed z-50"  >
        <NavLink to={"/"}  >
          <img
            src={logo}
            alt="no image"
            className="w-[70px] object-cover
      md:w-[130px]  text-white"
          />
        </NavLink>

        <div className=" hidden md:flex gap-8">
          <NavLink to={"/"}  >
            <div className="text-white flex item-center gap-3 justify-center items-center text-[15px] font-semibold cursor-pointer  hover:underline underline-offset-8  ">
              <HiOutlineHome  />
              <h2 className=" ">HOME</h2>
            </div>
          </NavLink>

          <NavLink  to={"/allMovies"} >
          <div className="text-white flex item-center gap-3 text-[15px] justify-center items-center font-semibold cursor-pointer hover:underline  underline-offset-8  ">
            < HiPlayCircle />
            <h2 className=" ">MOVIES</h2>
          </div>
          </NavLink>

          <div className="text-white flex item-center gap-3 text-[15px] justify-center items-center font-semibold cursor-pointer hover:underline  underline-offset-8  ">
            <HiStar />
            <h2 className=" ">ORIGINAL</h2>
          </div>

          <NavLink to="/AllTv">
          <div className="text-white flex item-center gap-3 text-[15px] justify-center items-center font-semibold cursor-pointer hover:underline  underline-offset-8  ">
            <HiTv />
            <h2 className=" font-semibold ">TV SERIES</h2>
          </div>
          </NavLink>
          
        </div>

        <div className="flex gap-5 md:hidden z-40">
          <NavLink to="/"  >
          <HeaderItem name=" " Icon={ HiOutlineHome}  />
          </NavLink>
          <NavLink to="/allMovies">
          <HeaderItem name=" " Icon={ HiPlayCircle} />
          </NavLink>
        <HeaderItem name=" " Icon={HiStar} />
    

        </div>

        <div className="md:hidden " onClick={() => setToggle((prev) => !prev)}>
          <HeaderItem className="md:hidden " name="" Icon={HiMenuAlt3} />
          {toggle ? (
            <div className="absolute md:hidden p-1 m-2 bg-[#121212] rounded-md border-[1px] border-gray-500 px-2 py-2 z-40 ">
             <NavLink to="/AllTv">
          <div className="text-white flex item-center gap-3 text-[15px] justify-center items-center font-semibold cursor-pointer hover:underline  underline-offset-8  ">
            <HiTv />
            <h2 className=" font-semibold text-[10px] ">TV SERIES</h2>
          </div>
          </NavLink>
            </div>
          ) : null}
        </div>
        <div className="relative">
      {IdToggle?(
           <div className=" absolute bg-blue-800 z-50  rounded-xl md:top-16 top-12 ">
             <button className="text-white md:p-2 p-1 rounded-xl  md:text-[16px] font-bold  text-[12px] ">log in</button>
           </div>
         ):null}
      <img
        src={user}
        alt=""
        className="w-[30px] object-cover md:w-[45px] rounded-full text-white mt-3 mr-5  hover:scale-125 transition  "
        onClick={()=>setIdToggle((prev)=>!prev)}
      />
        
         </div>
      </div>
      
       
    </div>
  )
}

export default Header;
