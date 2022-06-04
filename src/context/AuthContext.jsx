import React, { createContext, useState,useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export const AuthContext= createContext();
export const AuthProvider=({children})=>{
    const [isauth,setIsauth]=useState(false)
    const [formarr,setFormarr]=React.useState([])
    const navigate=useNavigate()
    const {state} = useLocation()
   
    const [arr,setarr] =useState();
    const handlecart=(id)=>{
    console.log(id)
    axios.get(`http://localhost:8080/women/${id}`)
      
        .then((d)=>{
            setarr(d.data);
            console.log(arr.title)
           
        });

        axios.post("http://localhost:8080/addtocart",{
            title:arr.title,
            price:arr.price,
            image:arr.image
        })
        .then((res)=>console.log(res))
    navigate("/addtocart")

    
}

useEffect(()=>{
    axios
   .get(`http://localhost:8080/addtocart`)
  
   .then((d)=>{
    setFormarr(d.data);
       console.log(d)
      
   });
   },[]);
   
    const login=()=>{
        setIsauth(true)
        if(state.from){
            navigate(state.from )  
        }else{
            navigate("/")
        }
        // ,{replace:true}
    };

    const logout=()=>{
        setIsauth(false)
        navigate("/")
    };
    return (
    <AuthContext.Provider value={{isauth,login,logout,handlecart,formarr}}>{children}</AuthContext.Provider>
    )
}