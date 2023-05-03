import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Navbar from './Navbar';

 function App() {

  return(
      <>
      <BrowserRouter>
      <Navbar/>
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
      </>
    )
  }
export default App;
