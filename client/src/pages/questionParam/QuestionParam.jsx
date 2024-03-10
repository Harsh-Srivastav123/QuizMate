import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { baseUrl } from "../../baseUrl.jsx";
import { CustomContext } from '../../context/customQuizContext.jsx';
import { useNavigate } from 'react-router-dom';

const QuestionParam = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({ category: "all", number: 0, difficulty: "all" });
  const [totalques, setTotalques] = useState(0);
  const { setQuestionInfo } = useContext(CustomContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/question/category/all`);
        const categoryData = response.data.map(item => item.category);
        setCategories(categoryData);
        // Set categories and total questions once
        const categorylist = response.data;
        const totalQuestions = categorylist.reduce((total, category) => {
          switch (formData.difficulty) {
            case 'easy':
              return total + category.easyQuestion;
            case 'medium':
              return total + category.mediumQuestion;
            case 'hard':
              return total + category.hardQuestion;
            default:
              return total + category.totalQuestion;
          }
        }, 0);
        setTotalques(totalQuestions);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [formData.difficulty]);

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    const quesUrl = `${baseUrl}/question?pageNo=0&pageSize=${formData.number}&category=${formData.category}&difficulty=${formData.difficulty}`;
    axios.get(quesUrl)
      .then((response) => {
        const ques = response.data;
        setQuestionInfo(ques.questionList);
        navigate("/quiz");
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
        <input name="number" id='number' type="number" onChange={changeHandler} value={formData.number} />
        / {totalques}
      </div>

      <br />

      <button onClick={submitHandler}>Start the quiz</button>
    </div>
  );
}

export default QuestionParam;

