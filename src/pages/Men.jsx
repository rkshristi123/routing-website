import React from 'react'
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import style from "../style.module.css"
import axios from 'axios';
const Men = () => {
  const [men,setMen]=useState([])
  useEffect(()=>{
  
   axios.get(`http://localhost:8080/men`)
  // .then ((r)=>r.json())
   .then((d)=>{
       setMen(d.data);
      //  console.log(d)
      
   });
   },[]);
  return (
    <div><img className={style.crimg} src="https://assets.ajio.com/cms/AJIO/WEB/04062022-D-UHP-Men-p5-brands-min50.jpg"/>
    <h1>Men section-></h1>
    <br/>
   
    <div className={style.box2}>
    {
      men.map((el)=>(
       <div className={style.box3} key ={el.id}>
         <img className={style.img} src={el.image}/>
         <p>{el.title}</p>
         <p>₹{el.price}</p>
        <Link to={`/men/${el.id}`}>More details</Link>
        
       </div>
      ))
    }
    
    </div>
    
  
  </div>
  )
}

export default Men