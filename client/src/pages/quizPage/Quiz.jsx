import React, { useContext, useState } from 'react'
import { CustomContext } from '../../context/customQuizContext'

const Quiz = () => {
    
  const {questionInfo,setQuestionInfo,totalQ}=useContext(CustomContext);
  console.log(questionInfo);
  const start=0;
  const end=totalQ;
  const [current,setCurrent]=useState(0);
  

  const handleNextClick = () => {
    setCurrent(current + 1);
  };
  const handlePreviousClick = () => {
    setCurrent(current - 1);
  };
  const handleSubmitNext = () => {
    //add response to list

    setCurrent(current + 1);
  };


  return (
    <div>
      <div className='question'>
        {questionInfo[current].question}
      </div>

      <div className='options'>

        <div className='option1'>
          <input 
          type="radio"
          name="option"
          value="options1"
          id='option1' />
          <label htmlFor="option1">{questionInfo[current].options1}</label>
        </div>
        
        <div className='option2'>
            <input
            type="radio"
            name="option"
            value="options2"
            id="option2"/>
            <label htmlFor="option2">{questionInfo[current].options2}</label>
        </div>

        <div className='option3'>
            <input
            type="radio"
            name="option"
            value="options3"
            id="option3"/>
            <label htmlFor="option3">{questionInfo[current].options3}</label>
        </div>

        <div className='option4'>
            <input
            type="radio"
            name="option"
            value="options4"
            id="option4"/>
            <label htmlFor="option4">{questionInfo[current].options4}</label>
        </div>

      </div>
      <br />
      <div>
        {(current>0)?<button onClick={handlePreviousClick}>Previous</button>:""}
        {(current<end)?<button onClick={handleNextClick}>Next</button>:""}
      </div>
      <br />
      <div>
        {(current<end)?<button onClick={handleSubmitNext}>Submit and Next</button>:""}
        <button>Submit the Quiz</button>
      </div>
    </div>
  )
}

export default Quiz
