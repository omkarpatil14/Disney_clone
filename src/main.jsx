import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './Component/HomePage'
import './index.css'
import { RouterProvider,Route,Routes } from 'react-router-dom'
import {  createBrowserRouter } from 'react-router-dom'
import App from './App'
import MoviePage from './Component/MoviePage'
import AllMovies from './Component/AllMovies'
import SliderMovie from './Component/SliderMovie'
import AllTv from './Component/AllTv'
import AllMoviePage from './Component/AllMoviePage'
import AllTvPage from './Component/AllTvPage'
 
const router= createBrowserRouter(
  [
    { path:"/",
     element:<App/>,
     children:[
      { path:"/",
         element:<HomePage/>},
      
      { path:"/Movie/:id/:genreId?",
         element:<MoviePage/>},

      {
        path:"/allMovies",
        element:<AllMovies/>,
      },
      {
        path:"/SliderMovie/:id",
        element:<SliderMovie/>
      },
      {
        path:"/AllTV",
        element:<AllTv/>
      },
      {
        path:"/AllMoviesPage/:id",
        element:<AllMoviePage/>
      },
      {
        path:"/AllTvPage/:id",
        element:<AllTvPage/>
      },
      
      
     ]},
   
  ])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
