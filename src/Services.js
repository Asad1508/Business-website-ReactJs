
import img from '../src/images/pic1.jpg'
import Card from './Card';
import Sdata from './Carddata';
const Services=()=>{
    return(
        <>
        <div className="my-5">
            <h1 className="text-center">Our services</h1>
        </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-5">
                       
                        {
                            Sdata.map((val,index)=>{
                                     return <Card key={index} imgsrc={val.imgsrc} title={val.title}/>
                            })
                        }
                    
                </div>
            </div>
        </div>
        </div>
        </>
    )
    }
    export default Services;