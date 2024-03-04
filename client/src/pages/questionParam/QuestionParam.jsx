import React, { useEffect } from 'react';
import axios from "axios";
import {baseUrl} from "../../baseUrl.jsx"


const QuestionParam = () => {

  let categorylist=[];
  
  
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `${baseUrl}/question/category/all`,
    headers: { 
      'X-API-Key': ''
    }
  };
  
  axios.request(config)
  .then((response) => {
    //console.log(JSON.stringify(response.data));
    response.data.forEach(item => {
      categorylist.push(item);
      
    });
    console.log(categorylist);
    console.log(categorylist[0].category)
  })
  .catch((error) => {
    console.log(error);
  });
  
  function handleChange(event){
    console.log(event.target.value)
  }

  
  return (
    <div>
      
     

      

    </div>
  )
}

export default QuestionParam
