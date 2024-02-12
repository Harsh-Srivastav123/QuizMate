import { createContext, useContext, useEffect,useState } from "react";
import axios from "axios";
import {baseUrl} from "./../baseUrl.jsx"
export const AuthContext = createContext();


export const AuthContextProvider =({children})=>{
    
    
    //to store userCredential
    const [userName,setUserName]=useState('');
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [uId,setId]=useState("");
    //to display message
    
    const [message,setMessage]=useState("");

    const [accessToken,setAccessToken]=useState("");

    const login =async(inputs) => {
        //login
        //console.log(inputs)
        
        let data = JSON.stringify({
            "userName": "Harsh-Raj-Srivastav-prod",//`${inputs.userName}`,
            "email": "srivastavharsh2003@gmail.com",//`${inputs.email}`,
            "password":"123456789"//`${inputs.password}`
        });
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: baseUrl+'/user/auth',
            headers: { 
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json', 
                'X-API-Key': '{{token}}'
            },
            data : data
        };
        axios.request(config)
        .then((response) => {
            setUserName(response.data.userName);
            setEmail(inputs.email);
            setPassword(inputs.password);
            setId(response.data.userId);
            setAccessToken(response.data.token);
            

        })
        .catch((error) => {
            console.log("req error")
            console.log(error);
        });
        
        
    };
    
    
    useEffect(() => {
        //console.log("Updated userName:", accessToken);
      }, [userName,email,password,uId,accessToken]);
      

      let value = {
        login,
        message,
        setMessage,
        accessToken,
        setAccessToken,
        userName,
        email,
        setEmail,
        password,
        setPassword,
        uId,
        setId,
      };/*
    let value={
        login,
        message,
        setMessage,
        accessToken,
        setAccessToken,
        userName,
        setCurrentUser,
        email,
        setEmail,
        password,
        setPassword,
        uId,
        setId
        
    }*/
    console.log(userName)
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};