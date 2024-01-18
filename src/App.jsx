import { Outlet } from "react-router-dom"
import GenreMovieList from "./Component/GenreMovieList"
import Header from "./Component/Header"
import HomePage from "./Component/HomePage"
import ProductionHouse from "./Component/ProductionHouse"
import Slider from "./Component/Slider"
import Footer from "./Component/Footer"



function App() {


  return (
    <>
  
      <div >
       
       <Header/>
        <Outlet/>
       <Footer />
        </div>
        
    </>
  )
}

export default App
