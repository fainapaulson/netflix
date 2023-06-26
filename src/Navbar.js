import React, { useEffect, useState } from 'react'
import './Nav.css'

function Navbar() {
// create state 
const [show,setShow]=useState(false)
useEffect(()=>{
    window.addEventListener('scroll',()=>{
        if(window.scrollY>350){
            setShow(true)
        }
        else{
            setShow(false)
        }
    })
},[])
console.log(show);

  return (
    <div className={`nav ${show && 'navBlack'}`}>
        <img className="logo" src='https://i.postimg.cc/T3tX3vVf/Netflix-Logo.png'></img>
    </div>
  )
}

export default Navbar