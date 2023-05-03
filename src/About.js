import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../src/images/pic1.jpg';
import Common from './Common';
const Home=()=>{
return(
    <>
    <Common 
    name="About pgae"
    imgsrc={img}
    visit="/contact"
    btname="Contact Now"
    />
    </>
)
}
export default Home;