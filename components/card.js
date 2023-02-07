import React, { useEffect, useState } from "react"
import './card.css'
import axios from "axios"


function Card({title, body})  {

const [user, setUser] = useState([])

useEffect (() => {
  axios.get("https://swapi.dev/api/people//")
.then((res) => {
    setUser(res.data.results)
  }).catch (() => {
    console.log("Deu ruim cria");
   })
}, []);

  return (

    <div className='card-container'>
                    
             <h1>{title} </h1>
        
           
            <div className='card-body'>
           
           {user.map((item) => (
            <h3 className="personagens">
              name : {item.name} <br></br>
              height: {item.height}<br></br>
              mass: {item.mass}<br></br>
              hair color: {item.hair_color} <br></br>
              skin color: {item.skin_color}
            </h3>

           ))}
            
          
            

          
         
              
            </div>
          
      

        
    </div>
    
  )}


export default Card