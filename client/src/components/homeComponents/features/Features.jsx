import React from 'react'

import Lang from "./../../../assets/codee.png"
import ques from "./../../../assets/ques.png"
import Time from "./../../../assets/time.png"
import Diff from "./../../../assets/diff.png"
import Rev from "./../../../assets/rev.png"

import lead from "./../../../assets/lead.jpeg"

const Features = () => {
  return (
    <div >
     
      <div className=" flex flex-row">

        <div className="f  ">
            <img src={Lang} alt="" />
            <span>Coding Language Selection</span>
            <p>Users choose programming language preferences for coding-related quizzes.</p>
        </div>

        <div className="f">
            <img src={ques} alt="" />
            <span>Number of Questions Selection</span>
            <p>Customize quiz length by selecting the desired number of questions.</p>
        </div>

        <div className="f">
            <img src={Time} alt="" />
            <span>Fixed Duration</span>
            <p>Set a specific time limit for completing each quiz.</p>
        </div>

        <div className="f">
            <img src={Diff} alt="" />
            <span>Difficulty Level Selection:</span>
            <p>Adjust the complexity of the quiz with options like easy, medium, or hard.</p>
        </div>

        <div className="f">
            <img src={Rev} alt="" />
            <span>Review Mode</span>
            <p>Access a comprehensive review mode to analyze correct and incorrect answers post-quiz.</p>
        </div>

        <div className="f">
            <img src={lead} alt="" />
            <span>Interactive Leaderboards</span>
            <p>Compete with peers on interactive leaderboards for a dynamic and engaging experience.</p>
        </div>

      </div>
    </div>
  )
}

export default Features
