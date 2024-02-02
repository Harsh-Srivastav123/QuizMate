import React from 'react'
import Logo from "../../assets/logo.jpeg"
import "./navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left">
        <a href="/"><img src={Logo} alt="" className='logo' /></a>
      </div>
      <div className="right">
            
      </div>
    </div>
  )
}

export default Navbar
