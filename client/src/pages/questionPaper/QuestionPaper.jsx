import React, { useContext, useEffect } from 'react'
import {baseUrl} from "../../baseUrl.jsx"
import axios from 'axios';
import { CustomContext } from '../../context/customQuizContext.jsx';
import { useNavigate } from 'react-router-dom';

const QuestionPaper = () => {

    const { questionInfo , setQuestionInfo , totalQ,setTotalQ,chosenCategory,setChosenCategory ,totalMarks,setTotalMarks} = useContext(CustomContext);
    const navigate = useNavigate();


    useEffect(()=>{
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${baseUrl}/question/questionPaper`,
            headers: { 
              'X-API-Key': '{{token}}'
            }
          };
          
          axios.request(config)
          .then((response) => {
            //console.log(JSON.stringify(response.data));
            const ques=response.data;
            setQuestionInfo(ques.questionList);
            setChosenCategory(ques.category);
            setTotalQ(ques.totalQuestion);
            let maxMarks = 0;
            ques.questionList.forEach(question => {
                maxMarks += parseInt(question.marks);
            });
            setTotalMarks(maxMarks);

          })
          .catch((error) => {
            console.log(error);
          });
    },[])
    useEffect(()=>{
        console.log(questionInfo);
        console.log(chosenCategory);
        console.log(totalQ);
        console.log(totalMarks);
    },[totalMarks])
    function clickHandler(event){
        event.preventDefault();
        navigate("/quiz");

    }
    
  return (
    <div>
      <div>
        <h1>IMPORTANT</h1>
        <p>This quiz covers various programming languages and concepts.</p>
        <p>You will encounter questions of different difficulty levels: easy, medium, and hard.</p>
        <p>To start the quiz, press the "Begin Quiz" button.</p>
        <p>You will be presented with 12 random questions from our pool.</p>
        <p>Once you've chosen your answer, press the "Submit and Next" button to proceed to the next question.</p>
        <p>You can go back to previous questions and change your answer.</p>
        <p>Your score will be calculated based on correct answers and difficulty levels.</p>
        <p>At the end of the quiz, you'll see your total score and have the option to review your answers.</p>
        <p>Enjoy the challenge, and good luck! 🍀</p>

      </div>
      <br />
      <div>
        <button onClick={clickHandler}>Begin Quiz</button>
      </div>
    </div>
  )
}

export default QuestionPaper
