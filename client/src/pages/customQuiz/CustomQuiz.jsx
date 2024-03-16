import React, { useContext, useEffect, useState } from 'react'
import { baseUrl } from '../../baseUrl.jsx';
import axios, { formToJSON } from 'axios';
import { useNavigate } from 'react-router-dom';
import { CustomContext } from '../../context/customQuizContext.jsx';

const CustomQuiz = () => {

    const [formData, setFormData] = useState({ category: "", easy: 0, medium:0, hard:0 });
    const [categories, setCategories] = useState([]);
    const [easyQuestion,setEasyQuestion]=useState(0);
    const [mediumQuestion,setMediumQuestion]=useState(0);
    const [hardQuestion,setHardQuestion]=useState(0);
    const [categoryList,setCategoryList]=useState([]);
    const [qList,setQList]=useState([]);
    const { questionInfo , setQuestionInfo , totalQ,setTotalQ,chosenCategory,setChosenCategory ,totalMarks,setTotalMarks} = useContext(CustomContext);
    const navigate = useNavigate();

    function updateQuestionCounts() {
        const selectedCategoryData = categoryList.find(categoryData => categoryData.category === formData.category);
    
        if (selectedCategoryData) {
            setEasyQuestion(selectedCategoryData.easyQuestion);
            setMediumQuestion(selectedCategoryData.mediumQuestion);
            setHardQuestion(selectedCategoryData.hardQuestion);
        } else {
            // If the selected category is not found, set all counts to 0
            setEasyQuestion(0);
            setMediumQuestion(0);
            setHardQuestion(0);
        }
    }
    useEffect(()=>{
        updateQuestionCounts();
    },[formData.category])
       

    useEffect(()=>{
        
        const fetchData = async () => {
            try {
              const response = await axios.get(`${baseUrl}/question/category/all`);
              console.log(response.data);
              const categoryData = response.data.map(item => item.category);
              setCategories(categoryData);
              setCategoryList(response.data);
              updateQuestionCounts();
            } catch (error) {
              console.log(error);
            }
          };
          fetchData();
          
    },[]);

    useEffect(()=>{
        console.log(formData)
        //console.log(categoryList);
    },[formData.category,formData.easy,formData.medium,formData.hard,categoryList]);

    function changeHandler(event) {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: value
        }));
        //console.log(formData);
        updateQuestionCounts();
    }

    function addHandler(event){
        event.preventDefault();
        var newObj = {
            category:formData.category,
            easy:formData.easy,
            medium:formData.medium,
            hard:formData.hard
        };
        setQList(prevState => ([
            ...prevState, newObj
        ]));
        
        setFormData({
            category:"",
            easy:0,
            medium:0,
            hard:0
        });

    }
    useEffect(()=>{
        console.log(qList);
    },[qList])

    function submitHandler(e){
        e.preventDefault();
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${baseUrl}/question/customQuiz`,
            headers: { 
              'Content-Type': 'application/json', 
              'X-API-Key': '{{token}}'
            },
            data : qList
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
        navigate("/quiz");
          
    }
    useEffect(()=>{
        console.log(questionInfo);
        console.log(chosenCategory);
        console.log(totalQ);
        console.log(totalMarks);
    },[totalMarks])

  return (
    <div>
        <label htmlFor="category">Category</label>
        <select name="category" id="category" onChange={changeHandler} value={formData.category}>
            <option value=""></option>
            {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
            ))}
        </select>
        <br />
        <div>

            <label htmlFor="easy">Number of Easy Questions</label>
            <div>
                <input name="easy" id='easy' type="number"  onChange={changeHandler} value={formData.easy} />
                / {easyQuestion}
            </div>

            <label htmlFor="medium">Number of Medium Questions</label>
            <div>
                <input name="medium" id='medium' type="number"  onChange={changeHandler} value={formData.medium} />
                / {mediumQuestion}
            </div>

            <label htmlFor="hard">Number of Hard Questions</label>
            <div>
                <input name="hard" id='hard' type="number"  onChange={changeHandler} value={formData.number} />
                / {hardQuestion}
            </div>

        </div>

        <div>
            <button onClick={addHandler}>Add</button>
        </div>
        <div>
           {qList.map((que,index) =>(
                <div key={index}>
                    <p>Category : {que.category}</p>
                    <p>Easy : {que.easy}</p>
                    <p>Medium : {que.medium}</p>
                    <p>Hard : {que.hard}</p>
                    <br />
                </div>
           ))}
        </div>

        <div>
            <button onClick={submitHandler}>Begin Quiz</button>
        </div>
      
    </div>
  )
}

export default CustomQuiz
