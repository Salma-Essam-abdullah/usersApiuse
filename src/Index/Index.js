 import React ,{useState} from 'react';
 import Content from '../Home/Content';
 import Header from '../shared/Header';
 import Footer from '../shared/Footer';
 import axios from "axios";

 function Index() {
  const [newuser, setnewuser] = useState([])
  const [user, setuser] = useState('');
  const [search, setSearch] = useState([]) 
  
  const getData= function(){
    if (!user){
    const options = {
      method: 'GET',
     url: 'https://gorest.co.in/public/v1/users'
    };
    axios.request(options).then(function (response) {
      setuser(response.data)
      setnewuser(response.data)
    }).catch(function (error) {
      console.error(error);
    })
  }
}

// user.find(o=>o.name == dataFromUser )
// const filteredContacts = search.length === 0 ? newuser : 


const FilterList =function (event){
  if( typeof(user) == typeof(newuser)){
  setnewuser(user.data.filter(object => object.name.
    toLowerCase().includes(event.target.value.toLowerCase())))

  }
}

const Search = function()
{
  return(
  <div>
                <input 
                    type="text" 
                    placeholder="Search name" 
                    
                    onChange={FilterList}
                    />
              
  </div>
  )  
}
   return (
     <>
       <p style={{display:'none'}}>  {getData()} </p> 
   <Header/>
   <h1>{Search()}</h1>
   {
   newuser.data?
   newuser.data.map((object) =>
   <Content
   id={object.id}
   name={object.name}
   status={object.status}
   />
   )
   : 
   newuser.map((object) =>
   <Content
   id={object.id}
   name={object.name}
   status={object.status}
   />
   )
   }
   
  <Footer/>

   </>

   );
 }

 export default Index


