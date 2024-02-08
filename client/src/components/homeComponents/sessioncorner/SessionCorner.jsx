import React from 'react'
import "./sessioncorner.scss"
import Pic from "./../../../assets/sessi.jpg"
import Img1 from "./../../../assets/conduct.png"
import Img2 from "./../../../assets/attend.png"

const SessionCorner = () => {
  return (
    <div className='sessioncorner'>

        <span>Quiz Session</span>
        
        <div className="card">
            <div className="left">
                <div className="top abc">
                    <div className="line">
                        <img src={Img1} alt="" />
                        <span>Conduct a Quiz Session</span>
                    </div>
                    <button>Conduct Quiz</button>
                </div>
                <div className="bottom abc">
                    <div className="line">
                        <img src={Img2} alt="" />
                        <span>Attend A Quiz Sessiuon</span>
                    </div>
                    <button>Attend Quiz</button>
                </div>
            </div>
            <div className="right">
                <img src={Pic} alt="" />
            </div>
        </div>

      
    </div>
  )
}

export default SessionCorner
