import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/authContext';
import { baseUrl } from '../../baseUrl';

const Conductsession = () => {
    const { accessToken } = useContext(AuthContext);
    const [message, setMessage]=useState('');
    const [delayDuration, setDelayDuration]=useState(0);
    const [duration, setDuration]=useState(0);
    const [title, setTitle]= useState('');
    const [quesList, setQuesList]=useState('');
    const [userList, setUserList]=useState('');

  
        const handleCreateSession = async () => {
           
            if (!accessToken) {
                setMessage("Access token not found. Please log in.");
                return;
            }

            try {
                let data = JSON.stringify({
                    "delayDuration": delayDuration,
                    "duration": duration,
                    "sessionTitle": title,
                    "sessionQuestionList": [
                      {
                        "id": 2
                      },
                      {
                        "id": 3
                      },
                      {
                        "id": 5
                      },
                      {
                        "question": "made in session",
                        "options1": "apply",
                        "options2": "run",
                        "options3": "with",
                        "options4": "also",
                        "category": "Kotlin",
                        "rightAnswer": "also",
                        "topic": "Scope Functions",
                        "marks": "5",
                        "difficulty": "easy"
                      }
                    ],
                    "sessionUserList": [
                      {
                        "userId": 802
                      },
                      {
                        "userId": 803
                      },
                      {
                        "userId": 852
                      }
                    ]
                  });
                  
                  let config = {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: `${baseUrl}/session/createSession`,
                    headers: { 
                      'Authorization': `Bearer ${accessToken}`, 
                      'Content-Type': 'application/json', 
                      'X-API-Key': '{{token}}'
                    },
                    data : data
                  };
                  
                  axios.request(config)
                  .then((response) => {
                    console.log(JSON.stringify(response.data));
                  })
                  .catch((error) => {
                    console.log(error);
                  });
            } catch (error) {
                console.error(error);
                
            }
        };
       
    return( 
    (!accessToken?<div>{message}</div>:<div>
        <input type="number" value={delayDuration} onChange={(e)=>setDelayDuration(e.target.value)}  placeholder='Enter Delay Duration'/>
        <input type="number" value={duration} onChange={(e)=>setDuration(e.target.value)} placeholder='Enter Duration'/>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Enter Title'/>
        <button onClick={handleCreateSession}>Create Session</button>
    </div>)
    )
};

export default Conductsession;
