import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../src/images/pic1.jpg';
const Common=(props)=>{
return(
    <>
   <section id="header" className="mt-5">
       <div className="container-fluid nav_bg">
           <div className="row">
               <div className="col-10 mx-auto">
                   <div className="row">
                   <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 mt-5">
                       <h1>{props.name} <strong style={{color:'blue'}}>Asad Mehmood</strong></h1>
                       <h2 className="my-3">We are the best and talented developers</h2>
                       <div className="mt-3">
                           <NavLink to={props.visit} className="btn btn-success">
                               {props.btname}
                           </NavLink>
                       </div>
                   </div>
                   <div className="col-lg-6 order-1 order-lg-2 header-img">
                       <img src={props.imgsrc} className="img-fluid animated" alt="home img" />
                   </div>
                   </div>
               </div>
           </div>
       </div>
   </section>
    </>
)
}
export default Common;