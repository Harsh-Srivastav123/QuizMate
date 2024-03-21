import React from 'react'


import { useNavigate } from 'react-router-dom';

const PracticeCorner = () => {
  const navigate = useNavigate()
  function clickHandler(e){
    e.preventDefault();
    navigate("/questionParam");
  }
  return (
    <div className='h-[40rem] bg-[#2A1B3D]'>
    <div className='text-[#795df1]  text-center font-ghi  text-8xl animate-fade-down animate-once animate-duration-1000 animate-delay-1000'>Conduct a quiz</div>
      
      <div className=' pt-[4rem] text-abc text-4xl text-white text-center px-[15rem] leading-loose'>Elevate group engagement with QuizMate's effortless quiz hosting, fostering shared learning experiences and interactive fun for all!</div>
      <div className='pl-[43rem] pt-[4rem] '>
        
        <a href="#_" class="relative inline-flex items-center justify-center px-6 py-4 text-lg font-medium tracking-tighter text-white bg-[#44318D] rounded-full group">
          <span class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#44318D] rounded-full group-hover:mt-0 group-hover:ml-0"></span>
          <span class="absolute inset-0 w-full h-full bg-white rounded-full "></span>
          <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#44318D] rounded-full opacity-0 group-hover:opacity-100 "></span>
          <span class="relative text-[#44318D] text-2xl transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Conduct!</span>
        </a>      
      </div>
    </div>
  )
}

export default PracticeCorner
