import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext.jsx";
import axios from "axios";




const LoginPage=()=>{
    
    const [inputs,setInputs] = useState({
        userName:"",
        email:"",
        password:""
    });
    const [err,setErr] = useState(null);
    const {login} =useContext(AuthContext);

    const navigate = useNavigate()

    const handleChange =  (e) =>{
        setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
    };
    

    const handleLogin = async (e)=>{
        e.preventDefault()
        //console.log(inputs)
        try{
            await login(inputs);
         main
            navigate("/");
        }catch(err){
            setErr(err);
            console.log(err);
        }
    }
    return(
        <div className="bg-[#2a1b3d] min-h-screen flex-col">
        <div className="flex flex-col h-screen  items-center justify-center ">
            <div className="text-7xl text-white">QuizMate</div>
            <div className="text-4xl text-white mt-10">LogIn </div>
            <input className="m-7 w-[20rem] h-10 bg-[#a4b3b6] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  type="text" placeholder="Username" name="userName" onChange={handleChange}/>
            <input  className="m-7 w-[20rem] h-10  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="email"  placeholder="Email" name="email" onChange={handleChange}/>
            <input  className="m-7 w-[20rem] h-10  bg-gray-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="password" placeholder="Password" name="password" onChange={handleChange}/>
            <button className=" p-10 h-10 m-7 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={handleLogin}>Login</button>
            {err && err}
        </div>  
        </div>       
        
    )
}
export default LoginPage;