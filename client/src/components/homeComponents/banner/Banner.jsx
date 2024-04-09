import React, { useState } from 'react'


import { useEffect } from 'react';
import { Link } from 'react-router-dom';


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
        
       <Link to="/signup"> <button className=" p-10 h-10 m-7 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Signup</button> </Link>    
      </div>
    </div>
  )
}

export default Banner
