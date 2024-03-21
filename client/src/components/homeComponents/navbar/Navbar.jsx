import React from 'react'


import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='h-[7rem] bg-[#2A1B3D] flex'>
      <div className='min-h-12 w-[7rem] text-5xl px-[4rem] font-ghi py-7 text-[#EDEAE5]'>Quizmate</div>
      
      <div className='pl-[60rem] py-10 text-2xl font-abc cursor-default text-[#EDEAE5]'>Blog</div>
      <div className='pl-[5rem] py-10 text-2xl font-abc cursor-default text-[#EDEAE5]'>About Us</div>
      <div className='pl-[5rem] py-8 '>
      <div className="avatar">
  <div className="w-12 rounded-full ring  ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
      </div>
     
    </div>
    </>
  )
}

export default Navbar
