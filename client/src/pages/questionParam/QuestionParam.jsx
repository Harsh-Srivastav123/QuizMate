import React, { useEffect } from 'react';
import axios from "axios";
import {baseUrl} from "../../baseUrl.jsx"


const QuestionParam = () => {

  let categorylist=[];
  let categories=[];
  
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
      categories.push(item.category);
    });
    console.log(categorylist);
    console.log(categories);
    //console.log(categorylist[0].category)
  })
  .catch((error) => {
    console.log(error);
  });
  
 
  
  return (
    <div>
      
     
     
     <select name="category" id="category">
      {
        categories.map((item,index)=>(
          <option key={item.category} value={item.category}>{item.category}</option>
        ))
      }
     </select>

      

    </div>
  )
}

export default QuestionParam
