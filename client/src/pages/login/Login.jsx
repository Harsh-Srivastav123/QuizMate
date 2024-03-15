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
            navigate("/questionParam");
        }catch(err){
            setErr(err);
            console.log(err);
        }
    }
    return(
        
        <div className="flex flex-row">
            <img src="" alt="" />
            <input type="text" placeholder="username" name="userName" onChange={handleChange}/>
            <input type="email"  placeholder="email" name="email" onChange={handleChange}/>
            <input type="password" placeholder="password" name="password" onChange={handleChange}/>
            <button onClick={handleLogin}>login</button>
            {err && err}
        </div>         
        
    )
}
export default LoginPage;