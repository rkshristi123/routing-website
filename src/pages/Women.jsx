import React from 'react'
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import style from "../style.module.css"
import axios from 'axios';
const Women = () => {
  const [women,setWomen]=useState([])
  useEffect(()=>{
  
   axios.get(`http://localhost:8080/women`)
  // .then ((r)=>r.json())
   .then((d)=>{
       setWomen(d.data);
      //  console.log(d)
      
   });
   },[]);
  return (
    <div> <img className={style.crimg} src="https://assets.ajio.com/cms/AJIO/WEB/04062022-D-unisex-JIT-p3-kurtas-brands-upto90.jpg"/>
   <h1>Women section-></h1>
   <br/>
    <div className={style.box2}>
    {
      women.map((el)=>(
       <div className={style.box3} key ={el.id}>
         <img className={style.img} src={el.image}/>
         <p>{el.title}</p>
         <p>₹{el.price}</p>
        <Link to={`/women/${el.id}`}>More details</Link>
        
       </div>
      ))
    }
    
    </div>
    
  
  </div>
  )
}

export default Women