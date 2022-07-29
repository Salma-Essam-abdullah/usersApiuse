import React ,{ useState } from 'react';
import { useParams } from 'react-router';
import Single from './Single';
const axios = require('axios');
function App2() {
  const params = useParams()
  const [user, setuser] = useState('');
 
  var id = params.id
  var Url =  'https://gorest.co.in/public/v1/users/'+id
  const getData = function(){
    if (!user){
      axios.get(Url)
      .then(function (response) {
        setuser(response.data.data)
        console.log(response)
      }) 
      .catch(function (error) {
        console.log(error);
    })
  }
}
const Search = function(){
// user.find(o=>o.name == dataFromUser )
}
    return (
      <>
      <p style={{display:'none'}}>  {getData()} </p>
        {user?
        <Single
        name={user.name}
        gender={user.gender}
        status={user.status}
        email={user.email}
        />
        : 
       <h1></h1>
       }
        
      </>
   
   );
 }
 export default App2;