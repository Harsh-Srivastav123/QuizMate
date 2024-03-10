import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { baseUrl } from "../../baseUrl.jsx";
import { CustomContext } from '../../context/customQuizContext.jsx';
import { useNavigate } from 'react-router-dom';

const QuestionParam = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({ category: "all", number: 0, difficulty: "all" });
  const [totalques, setTotalques] = useState(0);
  const { questionInfo , setQuestionInfo , totalQ,setTotalQ } = useContext(CustomContext);
  const navigate = useNavigate();

  let categorylist=[];
  let ques={};

  function updateTotalQuestion() {
    
    for (let i = 0; i < categorylist.length; i++) {
        
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/question/category/all`);
        console.log(response.data);
        const categoryData = response.data.map(item => item.category);
        setCategories(categoryData);
        categorylist = response.data;
        updateTotalQuestion();
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [formData.difficulty,formData.category]);

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
    //console.log(formData);
    updateTotalQuestion();
  }

  function submitHandler(event) {
    event.preventDefault();
    const quesUrl = `${baseUrl}/question?pageNo=0&pageSize=${formData.number}&category=${formData.category}&difficulty=${formData.difficulty}`;
    axios.get(quesUrl)
      .then((response) => {
        const ques = response.data;
        setQuestionInfo(ques.questionList);
        console.log(questionInfo);
        setTotalQ(ques.totalQuestion);
        console.log(totalQ);
        //navigate("/quiz");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <label htmlFor="category">Category</label>
      <select name="category" id="category" onChange={changeHandler} value={formData.category}>
        <option value="all">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>

      <br />

      <label htmlFor="difficulty">Difficulty</label>
      <select name="difficulty" id="difficulty" onChange={changeHandler} value={formData.difficulty}>
        <option value="all">All</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <br />

      <label htmlFor="number">Number of Questions</label>
      <div>
        <input name="number" id='number' type="number"  onChange={changeHandler} value={formData.number} />
        / {totalques}
      </div>

      <br />

      <button onClick={submitHandler}>Start the quiz</button>
    </div>
  );
}

export default QuestionParam;

