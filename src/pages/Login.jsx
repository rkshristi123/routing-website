import React, { useContext, useState } from 'react'

import { AuthContext } from "../context/AuthContext"

const Login = () => {
    const[logincreds,setLogincreds] =useState({})
   const {login}=useContext(AuthContext)
  
    const handleChange=(e)=>{
        // console.log(e.target)
        const [name,value]=e.target;
        setLogincreds({...logincreds,[name]:value,})
    }
    const handlesubmit=(e)=>{
     e.preventDefault()
     console.log("gddgdhdhdhd")
     login()
     
    }
  return (
    <div>Login
        <form onSubmit={handlesubmit}
        style={{display:"flex",flexDirection:"column" ,maxWidth:"200px",margin:"auto", gap:"20px", marginTop:"20px"}}>

            <input name="email" type="email" placeholder='Enter Email' onChange={handleChange}/>
            <input name="password" type="password" placeholder='Enter Password' onChange={handleChange}/>
            <button type="submit" >Submit</button>
        </form>
    </div>
  )
}

export default Login