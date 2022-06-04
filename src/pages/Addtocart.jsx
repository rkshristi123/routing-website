import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import style from "../style.module.css"
const Addtocart = () => {

  const{formarr} = useContext(AuthContext)
  
  return (
    <div>
    <h1>Add to cart section-></h1>
    <br/>
   
    <div className={style.box4}>
    {
      formarr.map((el)=>(
       <div className={style.box3} key ={el.id}>
         <img className={style.img} src={el.image}/>
         <p>{el.title}</p>
         <p>₹{el.price}</p>
        
        
       </div>
      ))
    }
    
    </div>
    
  
  </div>
  )
}

export default Addtocart