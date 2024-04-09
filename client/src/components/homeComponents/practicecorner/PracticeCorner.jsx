import React from 'react'
import { Link } from 'react-router-dom';



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
        
      <Link to="/conductSession"> <button className=" p-10 h-10 m-7 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Conduct</button> </Link>     
      </div>
    </div>
  )
}

export default PracticeCorner
