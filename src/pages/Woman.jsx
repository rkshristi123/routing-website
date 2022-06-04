import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import style from "../style.module.css"

const Woman = () => {
  
 
  const{handlecart} = useContext(AuthContext)
      const {id} =useParams()
    const [product,setProduct]=useState({})
    useEffect(()=>{
      if(id){
        axios.get(`http://localhost:8080/women/${id}`)
      
        .then((d)=>{
            setProduct(d.data);
            // console.log(d)
           
        });
    }
        },[id]);
      return (
        
        <div className={style.box4}>
            <img className={style.img} src={product.image}/>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <button onClick={()=>handlecart(id)}>Add to cart</button>
        </div>
        
      )

}
export default Woman