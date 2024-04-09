import React from 'react'


const SessionCorner = () => {
  return (
    <div className='h-[45rem] bg-[#2A1B3D] pt-[7rem]'>
    <div className='text-[#795df1]  text-center font-ghi  text-8xl animate-fade-down animate-once animate-duration-1000 animate-delay-1000'>Join a Session!</div>
      <div className=' pt-[4rem] text-abc text-4xl text-white text-center px-[15rem] leading-loose'>Step into the spotlight of knowledge-sharing and excitement by joining a quiz session with QuizMate – where curiosity meets camaraderie!</div>
      <div className='pl-[44.7rem] pt-[4rem] '>
        
        <a href="#_" className="relative inline-flex items-center justify-center px-6 py-4 text-lg font-medium tracking-tighter text-white bg-[#44318D] rounded-full group">
          <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#44318D] rounded-full group-hover:mt-0 group-hover:ml-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white rounded-full "></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#44318D] rounded-full opacity-0 group-hover:opacity-100 "></span>
          <span className="relative text-[#44318D] text-2xl transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Join!</span>
        </a>      
      </div>
    </div> 
  )
}

export default SessionCorner
