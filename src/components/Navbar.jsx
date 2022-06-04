import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import style from "../style.module.css"
const Navbar = () => {
    const {isauth,logout}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleloginclick=()=>{
       if(isauth){
           logout()
        //    navigate("/")
       }else{
           navigate("/login")
       }
    }
  return (
    <div className={style.box}><img className={style.logoimg} src="https://assets.ajio.com/static/img/Ajio-Logo.svg"/>
        <Link to="" >Home</Link>
        <Link to="/men" >Men</Link>
        <Link to="/women"> Women</Link>
        <Link to="/faq"> Faq</Link>
        <Link to="/addtocart">Add to cart</Link>
        <button className={style.btn} onClick={handleloginclick}>{isauth ?"Logout":"Login"}</button>
    </div>
  )
}

export default Navbar