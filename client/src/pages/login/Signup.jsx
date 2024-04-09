import React, { useState } from 'react'
import axios from "axios";
import FormData from "form-data"
import fs from "fs"
import Image from "./../../../public/user.jpeg"
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import {baseUrl} from "./../../baseUrl.jsx"
import { Link } from 'react-router-dom';

const Signup = () => {
    const [inputs,setInputs] = useState({
        userName:"",
        email:"",
        password:"",
    });
    const{message,setMessage}=useContext(AuthContext);
    const [registered,setRegistered]=useState(false);


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
                url: `${baseUrl}/user/createUser`,
                
                headers: { 
                    
                },
                data : data
            };

            axios.request
            (config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setMessage(JSON.stringify(response.data.message))
                console.log(message)
                setRegistered(true);

            })
            .catch((error) => {
                console.log(error);
                // setErr(error);
            });
            setRegistered(true);

        }
        catch(err){
           console.log(err)
        }
        
            
    };
    



  return (
    <div className="bg-[#2a1b3d] min-h-screen flex-col">
    <div className="flex flex-col h-screen  items-center justify-center "> 
    <div className="text-7xl text-white">QuizMate</div>
            <div className="text-4xl text-white mt-10">SignUp </div>
      <input className="m-7 w-[20rem] h-10 bg-[#a4b3b6] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder='UserName' name='userName' onChange={handleChange}/>
      <input className="m-7 w-[20rem] h-10 bg-[#a4b3b6] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="email" placeholder='Email' name='email' onChange={handleChange}/>
      <input className="m-7 w-[20rem] h-10 bg-[#a4b3b6] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="password" placeholder='Password' name='password' onChange={handleChange}/>
      <button className=" p-10 h-10 m-7 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={handleClick}>Register</button>
      <br />
      {message}
      <br />
      {registered && (<button>Login</button>)}
      

      <Link to="/login"><div>Already have an account?Login</div></Link>
    </div>
    </div>
  )

  }
export default Signup
