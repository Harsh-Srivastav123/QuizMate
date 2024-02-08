import React from 'react'
import Logo from "../../../assets/quizlogo.jpeg"
import "./navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left">
        <a href="/"><img src={Logo} alt="" className='logo' /></a>
      </div>
      <div className="middle">
        <a href="/"><span>Home</span></a>
        <a href=""><span>Discuss</span></a>
        <a href=""><span>Explore</span></a>
        <a href=""><span>Blog</span></a>
      </div>
      <div className="right">

        <button className='sign'>Sign In</button>

        <div className="user">
          <img src="" alt=""/>
          <span>Username</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
