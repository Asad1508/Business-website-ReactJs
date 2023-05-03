
import { NavLink } from 'react-router-dom';
import img from '../src/images/pic1.jpg'
const Card=(props)=>{
    return(
        <>
         <div className="col-md-4 col-10 mx-auto">
         <div className="card" >
  <img src={props.imgsrc} className="card-img-top" alt="cardimage"/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
  </div></div>
</div>
        </>
    )
}
export default Card;