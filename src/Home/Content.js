import React  from 'react';   
import { Link } from 'react-router-dom';
import av1 from '../images/av5.png'

function Content(props){
    return (<>

            <main class="main-content" >
                <div class="col-md-3 col-sm-6" style={{paddingTop:'50px' ,paddingBottom:'80px' ,paddingLeft:'40px'}}>
                    <div class="live-camera">
                 
                    <Link to={'/single/'+ props.id} >
                    <img src={av1} alt="1" style={{width:'200px' ,height:'200px' ,backgroundRepeat:'no-repeat'}} />
                    <h3 class="location">{props.name}</h3>
                    </Link>
                        <small class="date">{props.status}</small>
                    </div>
                </div>
                </main>
                
           
</>

);
}
export default Content;