import { useState } from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Home from './Page/Home/Home'



function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          {
            <Route path='/Home' element={<Home/>}/>
          }
        </Routes>
      </BrowserRouter>  
    </>
  )
}

export default App
