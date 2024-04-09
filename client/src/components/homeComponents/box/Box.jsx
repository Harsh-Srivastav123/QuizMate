import React from 'react'
import { Link } from 'react-router-dom'


const Box = () => {
  return (
    
    
    <div className='bg-[#2A1B3D] h-[40rem]'>
      <div className='text-[#795df1]  text-center font-ghi  text-8xl animate-fade-down animate-once animate-duration-1000 animate-delay-1000'>Create and Customize</div>
      <div className="text-white text-3xl pt-[4rem] text-center font-abc px-[23rem] leading-loose">Personalize your quiz experience, challenge yourself, and expand your knowledge!</div>
      <div className='pl-[41rem] pt-[4rem] '>
        
       
      <Link to="/customquiz"> <button className=" p-10 h-10 m-7 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Customize</button> </Link>
      </div>
    </div>
  )
}

export default Box
