import React, { useState } from 'react'
import "./banner.scss"
import Picture from "./../../../assets/banner1.jpg";
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
    <div className='banner'>
      <div className="card">
        <div className="left">
          <img src={Picture} alt="" className="pic" />
        </div>
        <div className="right">
          <span className="role">{roles[roleIndex]}</span>
        </div>
      </div>
    </div>
  )
}

export default Banner
