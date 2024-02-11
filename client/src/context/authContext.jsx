import { createContext, useEffect,useState } from "react";
import axios from "axios";

export const AuthContext = createContext();


export const AuthContextProvider =({children})=>{
    const [currentUser,setCurrentUser]= useState(
        JSON.parse(localStorage.getItem("user"))||null
    );

    const login =async(inputs) => {
        //login
        
        let data = JSON.stringify({
            "userName": "Harsh-Raj-Srivastav-prod",
            "email": "srivastavharsh2003@gmail.com",
            "password": "123456789"
        });
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://52.66.242.197:8080/user/auth',
            headers: { 
              'Content-Type': 'application/json', 
              'X-API-Key': '{{token}}'
            },
            data : data
        };
        axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            //setCurrentUser(res.data);
            //console.log(currentUser)
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
    
    return (
        <AuthContext.Provider value={{currentUser ,login,setCurrentUser}}>
            {children}
        </AuthContext.Provider>
    );
};