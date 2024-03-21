import React, { useState } from 'react'


import { useEffect } from 'react';


const Banner = () => {

   
  

  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    "Decode the Challenge, Master the Code!", 
    "Quiz, Code, Conquer!",
    "Crack the Quiz, Unleash the Coder in You!",
    "QuizMate: Where Bits and Bytes Become Fun!",
    "Byte-sized Challenges, Mega-sized Knowledge!",
    "Quiz, Learn, Code: Repeat!",
    "Sprint through Syntax, Triumph",
    "Quiz & Code: Elevate Your Programming Prowess!",
    "QuizMate: Quiz your Way to Programming Perfection!",
    
  ];

  useEffect(() => {
    const typeNextRole = () => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    };

    const intervalId = setInterval(typeNextRole, 2000); 
    // Change the interval as needed

    // Clean up the interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);
    
  return (
    <div className='h-[45rem] bg-[#2A1B3D]'>
      
    <div className='pt-[4rem] text-center leading-normal text-white font-abc text-6xl'>Join the quiz craze with </div>
    <div className='pt-0  leading-normal text-[#795df1] text-center font-abc text-9xl '>QuizMate</div>
    <div className='pt-[1rem] leading-normal text-center text-white font-abc text-3xl '>Take quizzes or craft your own custom challenges!</div>
      <div className='pl-[42rem] pt-[2rem] '>
        
        <a href="#_" class="relative inline-flex items-center justify-center px-6 py-4 text-lg font-medium tracking-tighter text-white bg-[#44318D] rounded-full group">
          <span class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#44318D] rounded-full group-hover:mt-0 group-hover:ml-0"></span>
          <span class="absolute inset-0 w-full h-full bg-white rounded-full "></span>
          <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#44318D] rounded-full opacity-0 group-hover:opacity-100 "></span>
          <span class="relative text-[#44318D] text-2xl transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Signup Now!</span>
        </a>      
      </div>
    </div>
  )
}

export default Banner
