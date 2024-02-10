import React from 'react'
import Logo from "../../../assets/quizlogo.jpeg"
import "./navbar.scss"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='h-[7rem] bg-[#022140] flex'>
      <div className='min-h-12 w-[7rem] text-5xl px-8 py-6 text-[#EDEAE5]'>Quizmate</div>
      <div className='pl-[40rem] py-9 text-2xl text-[#EDEAE5]'>Create</div>
      <div className='pl-[5rem] py-9 text-2xl text-[#EDEAE5]'>About Us</div>
      <div className='pl-[5rem] py-9'>
      <button className=" px-3 py-3 btn btn-outline rounded-full bg-">Enter Code</button>
      </div>
    </div>
    </>
  )
}

export default Navbar
