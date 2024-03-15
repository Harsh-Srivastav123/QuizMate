import React, { useContext, useEffect } from 'react'
import { CustomContext } from '../../context/customQuizContext'

const QuizResult = () => {
    const {resultList,result}=useContext(CustomContext);
    console.log(result);
    console.log(resultList);
    const incorrectAnswers = resultList.filter(item => !item.result).map(item => (
        <div key={item.id}>
            <p><strong>Question:</strong> {item.question}</p>
            <p><strong>Right Answer:</strong> {item.rightAnswer}</p>
            <p><strong>Wrong Answer:</strong> {item.submitResponse}</p>
        </div>
    ));
  return (
    <div>
      <div>
        <h1>Quiz Result</h1>
        <div>
            <p><span>Category : </span> {result.category}</p>
            <p><span>Total Questions : </span>{result.totalquestion}</p>
            <p><span>Attempted Questions : </span>{result.totalAttempptQuestion}</p>
            <p><span>Non Attempted Questions : </span>{result.nonAttemptQuestion}</p>
            <p><span>Right Answers : </span>{result.rightAnswer}</p>
            <p><span>Wrong Answers : </span>{result.wrongAnswer}</p>
            <p><span>Marks Obtained / Total Marks : </span>{result.totalMarks} / {result.maximumMarks}</p>

        </div>
      </div>
      <br />
      <div>
        <h3>Wrong Answers</h3>
        {incorrectAnswers}
      </div>
    </div>
  )
}

export default QuizResult
