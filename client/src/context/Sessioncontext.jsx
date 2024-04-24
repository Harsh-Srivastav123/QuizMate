import { createContext, useState } from "react"

export const SessionContext=createContext();
export const SessionContextProvider =({children})=>{
    const [sessionId, setSessionId]=useState(0);
    const [sessionTitle,setSessionTitle]=useState('');
    const [sessionQList,setSessionQList]=useState([]);
    const [result,setResult]=useState(null);
    const [sessionUserId, setSessionUserId]=useState('');

    let value={
        sessionId,setSessionId,sessionTitle,setSessionTitle,sessionQList,setSessionQList,result,setResult, sessionUserId,setSessionUserId

    }

    return (
        <SessionContext.Provider value={value}>
            {children}
        </SessionContext.Provider>
    )
}