import React, { useState } from 'react'
import axios from "axios";
import FormData from "form-data"
import fs from "fs"
import Image from "./../../../public/user.jpeg"

const Signup = () => {
    const [inputs,setInputs] = useState({
        userName:"",
        email:"",
        password:"",
    });
    const [err,setErr] = useState(null);
    const[registered,setRegistered]=useState(false);

    const handleChange = (e) =>{
        setInputs(prev=>({...prev,[e.target.name]:e.target.value}))   
    };
    const handleClick= async e=>{
        e.preventDefault();
        console.log(inputs)

        try{
            let data = new FormData();
            data.append('user', JSON.stringify(inputs));
            
            //data.append('image', `${Image}`);
            //data.append('user', '{\n    "userName":"Harsh-Raj-Srivfvsvdgbdgbastav-prod",\n    "email":"srivastavharsh2003@gmail.com",\n    "password":"123456789"\n}');
            console.log(data);
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://52.66.242.197:8080/user/createUser',
                headers: { 
                    
                },
                data : data
            };

            axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                })
            .catch((error) => {
                console.log(error);
                setErr(error);
            });
            setRegistered(true);

        }
        catch(err){
           //console.log({err})
           //setErr(err.response.data);
           console.log(err)

        }
        
            
    };
    



  return (
    <div >
      <input type="text" placeholder='usernaname' name='userName' onChange={handleChange}/>
      <input type="email" placeholder='email' name='email' onChange={handleChange}/>
      <input type="password" placeholder='password' name='password' onChange={handleChange}/>
      <button onClick={handleClick}>Register</button>
      {registered?"Please verify your mail to get registered" :""}
    </div>
  )

  }
export default Signup
