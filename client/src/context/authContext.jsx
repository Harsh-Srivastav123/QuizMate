import { createContext, useContext, useEffect,useState } from "react";
import axios from "axios";
import {baseUrl} from "./../baseUrl.jsx"
export const AuthContext = createContext();


export const AuthContextProvider =({children})=>{
    
    const [uId,setId]=useState("");
    const [userCredential,setUserCredential]=useState({userName:"", email:"", password:""});
    //to display message
    const [message,setMessage]=useState("");
    const [accessToken,setAccessToken]=useState("");
    //const [sessionId,setSessionId]=useState(0);
    let access="";
    
    const refreshToken =()=>{
        const {userName,email,password}=userCredential;
        let data=JSON.stringify({
            "userName": `${userName}`,
            "email": `${email}`,
            "password":`${password}`
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
        /*
        axios.request(config)
        .then((response) => {
            
            access=response.data.token;
            setAccessToken(access);
            console.log("New AccessToken is");
            console.log(accessToken);
        })
        .catch((error) => {
            console.log(error);
        });*/

        try {
            const response = axios.request(config);
            const newToken = response.data.token;
            setAccessToken(newToken);
            console.log("New AccessToken is:", newToken);
        } catch (error) {
            console.log(error);
        }
        
    }
    const login =async(inputs) => {
        
        let data = JSON.stringify({
            "userName": `${inputs.userName}`,
            "email": `${inputs.email}`,
            "password":`${inputs.password}`
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
            const { userName, userId, token } = response.data;
            
            setId(response.data.userId);
            access=response.data.token;
            setAccessToken(token);
            setUserCredential({
                userName: `${response.data.userName}`,
                email: `${inputs.email}`,
                password: `${inputs.password}`
            });

        })
        .catch((error) => {
            console.log("req error")
            console.log(error);
        });
        
        
    };
    
    
    useEffect(() => {
        
        console.log(userCredential);
        console.log(accessToken);
    }, [accessToken,userCredential]);
    

    let value = {
        login,
        message,
        setMessage,
        accessToken,
        setAccessToken,
        uId,
        setId,
        refreshToken,
        userCredential,
        setUserCredential,
        //sessionId,
        //setSessionId
    };
    
    //console.log(userName)
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};