import React from 'react'; 
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import av1 from '../images/av5.png'
function Single(props){
    return (<>
<Header/>
		<main class="main-content">
            <div class="fullwidth-block">
                <div class="container">
                    <div class="row">
                        <div class="content col-md-8">
                            <div class="post single">
                            <img src={av1} alt="1" style={{width:'300px' ,height:'300px' ,backgroundRepeat:'no-repeat'}} />
                                <h2 class="entry-title">Name: {props.name}</h2>                           
                                <div class="entry-content">
                                    <h3>Gender: {props.gender}</h3>
                                    <h3>Email: {props.email}</h3>
                                    <h3>Status: {props.status}</h3>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </main>
<Footer/>
        </>


);
}
export default Single;