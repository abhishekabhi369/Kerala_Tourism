import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import './Newnav.css'
function Newnav() {
    const [burger_class, setburgerclass] = useState("burger-bar clicked")
    const [menuclass, setmenuclass] = useState("menu hidden")
    const [Ismenuclicked, setIsmenuclicked] = useState(false)
    const updatemenu=()=>{
      if(!Ismenuclicked){
        setburgerclass("burger-bar clicked")
        setmenuclass("menu visible")
      }
      else{
        setburgerclass("burger-bar unclicked")
        setmenuclass("menu visible")
      }
      setIsmenuclicked(!Ismenuclicked)
    }
  return (
 <div style={{width:"100%",height:'100vh'}}>
  <nav>
      <div className='burger-menu'onClick={updatemenu}>
      <div className={burger_class} ></div>
      <div className={burger_class}></div>
      <div className={burger_class}></div>
      </div>
  </nav>
      <div className={menuclass}></div>
 </div>
  )
}

export default Newnav