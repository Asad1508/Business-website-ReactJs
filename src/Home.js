import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../src/images/pic1.jpg';
import Common from './Common';
const Home=()=>{
return(
    <>
    <Common
    name="Grow Your Business with"
    imgsrc={img}
    visit="/contact"
    btname="GET Started"
    />
    </>
)
}
export default Home;