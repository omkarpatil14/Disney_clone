import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillLinkedin,AiFillInstagram ,AiFillGithub,AiFillGoogleCircle} from "react-icons/ai";

const Footer = () => {
  return (
   
    <footer className="bg-gray-950 text-white p-8 relative">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Disney+ Hotstar Clone</h2>
          <p className="text-sm">Your go-to platform for streaming the best content</p>
        </div>
        <div className="flex flex-row items-center gap-5 md:  justify-between ">
          <NavLink to="/" >
          <a href="#" className="hover:text-gray-300">Home</a>
          </NavLink>
          <NavLink to="/allMovies">
         <a  className="hover:text-gray-300">Movies</a>
         </NavLink>
         <NavLink to="/AllTv">
          <a href="#" className="hover:text-gray-300">TV Shows</a>
          </NavLink>
          
          
        </div>
        <div className="flex flex-row items-center mt-4 md:mt-0 md:gap-8 gap-5  ">
        <a href="https://linkedin.com/in/omkar-patil-85098428a/" >
        <AiFillLinkedin className="md:scale-[250%] scale-[200%] hover:scale-[300%] transition ease-in-out" />
        </a>
        <a href='https://github.com/omkarpatil14'>
        <AiFillGithub className="md:scale-[250%] scale-[200%] hover:scale-[300%] transition ease-in-out"/>
        </a>
        <a href="mailto:omkarpatil9881@gmail.com">
        <AiFillGoogleCircle className="md:scale-[250%] scale-[200%] hover:scale-[300%] transition ease-in-out" />
        </a>
        <a href='#'> <AiFillInstagram className="md:scale-[250%] scale-[200%] hover:scale-[300%] transition ease-in-out"/></a>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Disney+ Hotstar Clone | Created by Omkar Patil
        </p>
        <p className="text-xs mt-2">Disclaimer: This is a clone project for educational purposes.</p>
      </div>
    </footer>
  );
};

export default Footer;
