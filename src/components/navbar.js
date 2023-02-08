import React, { useState } from "react";
import  "./navbar.css";
import {FaBars,FaTimes} from 'react-icons/fa'
import { Link } from "react-router-dom";
const Navbar = () => {
    const [click,setCLick] = useState(false);
    const handleClick = ()=>{
        return setCLick(!click)
    }
    const [color,setColor] = useState(false)
    const changeColor = ()=>{
        if(window.scrollY>=100){
            setCLick(true)
        }else{
            setColor(false)
        }
    }
    // window.addEventListener("scroll",changeColor)
  return (
    <div className={color?"header header-bg":"header"}>
        <Link to="/">
            <h1>@Portfolio</h1>
        </Link>
        <ul className={click?"nav-menu active":"nav-menu"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">contact</Link></li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click?(<FaTimes size={20} style={{color:"white"}}/>):(<FaBars size={20} style={{color:"white"}}/>)}
            
        </div>
    </div>
  )
}

export default Navbar