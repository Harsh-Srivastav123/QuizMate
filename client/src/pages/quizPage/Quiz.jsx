import React, { useContext, useEffect, useState } from 'react'
import { CustomContext } from '../../context/customQuizContext'
import {baseUrl} from "../../baseUrl.jsx"
import { AuthContext } from '../../context/authContext.jsx'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Quiz = () => {
    
  const {accessToken,userCredential,login,refreshToken}=useContext(AuthContext);
  const {questionInfo,setQuestionInfo,resultList,setResultList,result,setResult,
    totalQ,chosenCategory,totalMarks}=useContext(CustomContext);
  const start=0;
  const end=questionInfo.length-1;
  const [current,setCurrent]=useState(0);
  const [rightAns,setRightAns]=useState("");
  const [response, setResponse] = useState({
    responseList: [],
    totalQuestion: `${end + 1}`,
    category: `${chosenCategory}`,
    maximumMarks:`${totalMarks}`
  });
  const navigate = useNavigate();
  
  
  function changeHandler(event){
    
    setRightAns(event.target.value);
    //console.log(rightAns);
  }

  const handleNextClick = () => {
    setCurrent(current + 1);
    setRightAns("");
  };

  
  const handlePreviousClick = () => {
    setCurrent(current - 1);
  };
  
  const handleSubmitNext = () => {
    
    var newObj = {
      id: questionInfo[current].id,
      rightOption: rightAns
    };
    const existingEntryIndex = response.responseList.findIndex(entry => entry.id === newObj.id);
    if (existingEntryIndex !== -1) {
      response.responseList[existingEntryIndex].rightOption = newObj.rightOption;
    } else {
      setResponse(prevState => ({
        ...prevState,
        responseList: [...prevState.responseList, newObj]
      }));
      
    }
    

    //console.log(response);
    setRightAns("");
    if(current<end)
    {
      //setCurrent(current+1);
    }
    setCurrent(current+1);
  };

  const getResultHandler =() =>{
    let resultUrl=`${baseUrl}/user/response`;
    
    console.log(userCredential);
    

    console.log(`Bearer ${accessToken}`);
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: resultUrl,
      headers: { 
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json', 
        'X-API-Key': '{{token}}'
      },
      data : response
    };
    //console.log(accessToken);

    axios.request(config)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            setResultList(response.data.responseList)
            setResult(response.data.result);
            console.log("done");
            navigate("/quizResult");

            //Reset all custom context data
            setQuestionInfo([]);
          }
          else {
            try{
              console.log(userCredential);
              refreshToken();
              getResultHandler();
            }catch(error)
            {
              console.log(error);
            }
            
          }

        })
        .catch((error) => {
            console.log(error);
        });
        
        
  }
  useEffect(()=>{
    console.log(response);
  },[response,rightAns]);
  useEffect(()=>{
    console.log(resultList);
    console.log(result);
  },[resultList,result])
  useEffect(()=>{
    console.log(accessToken);
  },[accessToken])
  return (
    <>
    {(current<=end)?
    <div>
      <div className='question'>
        {questionInfo[current].question}
      </div>

      <div className='options'>

        <div className='option1'>
          <input 
          type="radio"
          onClick={changeHandler}
          //onChange={changeHandler}
          name="option"
          value={1}
          id='option1' />
          <label htmlFor="option1">{questionInfo[current].options1}</label>
        </div>
        
        <div className='option2'>
            <input
            type="radio"
            onClick={changeHandler}
            name="option"
            value={2}
            id="option2"/>
            <label htmlFor="option2">{questionInfo[current].options2}</label>
        </div>

        <div className='option3'>
            <input
            type="radio"
            onClick={changeHandler}
            name="option"
            value={3}
            id="option3"/>
            <label htmlFor="option3">{questionInfo[current].options3}</label>
        </div>

        <div className='option4'>
            <input
            type="radio"
            onClick={changeHandler}
            name="option"
            value={4}
            id="option4"/>
            <label htmlFor="option4">{questionInfo[current].options4}</label>
        </div>

      </div>
      <br />
      <div>
        {(current>0)?<button onClick={handlePreviousClick}>Previous</button>:""}
        {(current<(end))?<button onClick={handleNextClick}>Next</button>:""}
      </div>
      <br />
      <div>
        <button onClick={handleSubmitNext}>Submit and Next</button>
        
      </div>
    </div>
    :
    <button onClick={getResultHandler}>Submit the quiz</button>}
    </>
  )
}

export default Quiz
