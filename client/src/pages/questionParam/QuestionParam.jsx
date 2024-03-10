import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import {baseUrl} from "../../baseUrl.jsx"
import { CustomContext } from '../../context/customQuizContext.jsx';
import { useNavigate } from 'react-router-dom';


const QuestionParam = () => {

  const [categories,setCategories]=useState([]); 
  
  const [formData, setFormData] =useState({category:"all", number:0, difficulty:"all"});
  const [totalques,setTotalques]=useState(0);
  const {questionInfo,setQuestionInfo,setTotalQ,totalQ}=useContext(CustomContext);
  const navigate=useNavigate();

  let categorylist=[];
  let ques={};
  

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const response=await axios.get(`${baseUrl}/question/category/all`);
        const categoryData=response.data.map(item=>item.category);
        setCategories(categoryData); 
        response.data.forEach(item => {
          categorylist.push(item);
          
        });
      }catch(error){
        console.log(error);
      }
    };
    fetchData();
  },[]);
  
  
  
  function updateTotalQuestion() {
    
    for (let i = 0; i < categorylist.length; i++) {
        console.log(formData.category);
        if (categorylist[i].category == formData.category) {
            
            switch (formData.difficulty) {
                case 'easy':
                    setTotalques(categorylist[i].easyQuestion);
                    break;
                case 'medium':
                    setTotalques(categorylist[i].mediumQuestion);
                    break;
                case 'hard':
                    setTotalques(categorylist[i].hardQuestion);
                    break;
                case 'all':
                    setTotalques(categorylist[i].totalQuestion);
                    break;
                default:
                    console.log('Invalid difficulty level');
                    return;
            }
            
            return;
        }
    }
    if(formData.category=='all')
    {
        setTotalques(0);
        let que=0;
        for (let i=0;i< categorylist.length; i++)
        { 
          switch(formData.difficulty){
            case 'easy':
              que=que+categorylist[i].easyQuestion;
              break;
            case 'medium':
              que=que+categorylist[i].mediumQuestion;
              break;
            case 'hard':
              que=que+categorylist[i].hardQuestion;
              break;
            case 'all':
              que=que+categorylist[i].totalQuestion;
              break;
            default:
              console.log('Invalid difficulty level');
              return;
          }
        }
        setTotalques(que);
    }
  }

  
  function changeHandler(event) {
    const { name, value } = event.target;

    
    setFormData(prevFormData => {
        const updatedFormData = {
            ...prevFormData,
            [name]: value
        };
        //console.log(updatedFormData); 
        return updatedFormData;
    });
    console.log(formData);
    if(formData.category!='all' || formData.difficulty!="all")
    {
      updateTotalQuestion();
    }
  }
  useEffect(()=>{
    console.log(formData);
    updateTotalQuestion();
    console.log(totalques);
  },[formData.category,formData.difficulty]);

  function submitHandler(event) {
    event.preventDefault();
    //console.log("Printing form Data");
    console.log(formData);
    let quesUrl=`${baseUrl}/question?pageNo=0`;
    if(formData.number > 0)
    {
      quesUrl=quesUrl+`&pageSize=${formData.number}`;
    }
    if(formData.category!='all')
    {
      quesUrl=quesUrl+`&category=${formData.category}`;
    }
    if(formData.difficulty!='all')
    {
      quesUrl=quesUrl+`&difficulty=${formData.difficulty}`;
    }
    console.log(quesUrl);/*
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: quesUrl,
      headers: { 
        'X-API-Key': '{{token}}'
      }
    };
    axios.request(config)
    .then((response) => {
      console.log("Response from API")
      console.log(response.data);
      ques=response.data;
      //console.log(ques.questionList);
      setQuestionInfo(ques.questionList);
      //console.log(questionInfo);
    })
    .catch((error) => {
      console.log(error);
    });*/
    const fetchQuestion = async () => {
      try{
        const response=await axios.get(quesUrl);
        //console.log("Response from API")
        console.log(response.data);
        ques=response.data;
        setQuestionInfo(ques.questionList);
        console.log(questionInfo);
      }catch(error){
        console.log(error);
      }
    };
    fetchQuestion();

    //navigate("/quiz");
  }
  
  useEffect(() => {
    setQuestionInfo(ques.questionList);
    //console.log("Printing data");
    //setTotalQ(formData.number);
    //console.log(totalQ);
    console.log(questionInfo)
  }, [ques]);
  
  return (
    <div>
      <label htmlFor="category">Category</label>
      <select name="category" id="category" onChange={changeHandler}
        value={formData.category}>
        <option value="all">All</option>
        {categories.map((category)=>(
          <option key={category} value={category}>{category}</option>
        ))}
      </select>

      <br />

      <label htmlFor="difficulty">Difficulty</label>
      <select name="difficulty" id="difficulty" onChange={changeHandler}
        value={formData.difficulty}>
        <option value="all">All</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <br />

      <label htmlFor="number">Number of Questions</label>
      <div>
        <input  name="number" id='number' type="number" onChange={changeHandler}
         onClick={changeHandler} value={formData.number}/> / {totalques}
      </div>

      <br />

      <button onClick={submitHandler}>Start the quiz</button>
      
     
      

      

    </div>
  )
}

export default QuestionParam
