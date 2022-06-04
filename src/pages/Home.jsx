import React from 'react'
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import style from "../style.module.css"
import axios from 'axios';

const Home = () => {

  const [home,setHome]=useState([])
  useEffect(()=>{
  
   axios.get(`http://localhost:8080/home`)
  // .then ((r)=>r.json())
   .then((d)=>{
       setHome(d.data);
      //  console.log(d)
      
   });
   },[]);
  return (
    <>
    
    <div>
      <img className={style.crimg} src="https://assets.ajio.com/cms/AJIO/WEB/03062022-D-UHP-TopBanner-FINAL.jpg"/>
      <div className={style.box2}>
    {
      home.map((el)=>(
       <div className={style.box3} key ={el.id}>
         <img className={style.img} src={el.image}/>
        
        
       </div>
      ))
    }
    
    </div>
    </div>
    </>

    
  )
}

export default Home