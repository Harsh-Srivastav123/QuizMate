import React from 'react'
import "./practicecorner.scss";
import  Pic  from "./../../../assets/pc1.avif"
import Book from "./../../../assets/book.png";

const PracticeCorner = () => {
  
  return (
    <div className='practicecorner'>
      <span>Let's Practice</span>
      <div className='card show' id='card'>

        <div className="left">
          <img src={Pic} alt="" />
        </div>

        <div className="right">

          <div className="top">
            <div className="in">
              
              <img src={Book} alt="" />
              <span>Create Custom Quiz!</span>
              
            </div>
            
            <p>Create your own personalised quiz in just few steps and practice!</p>
                
          </div>

          <button>Create Custom Quiz</button>

        </div>

      </div>
    </div>
  )
}

export default PracticeCorner
