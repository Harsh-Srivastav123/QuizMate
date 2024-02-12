import { createContext, useEffect,useState } from "react";
import axios from "axios";
import {baseUrl} from "./../baseUrl.jsx"
export const AuthContext = createContext();


export const AuthContextProvider =({children})=>{
    
    const [currentUser,setCurrentUser]= useState(
        JSON.parse(localStorage.getItem("user"))||null
    );
    //to store userCredential
    const [userName,setUserName]=useState("");
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
            console.log(response.data)
            setAccessToken(response.data.token)
            console.log(accessToken);

        })
        .catch((error) => {
            console.log("req error")
            console.log(error);
        });
        
        
    };
    
    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser));
    },[currentUser]
    );
    let value={
        login,
        message,
        setMessage,
        accessToken,
        setAccessToken,
        
    }
    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};