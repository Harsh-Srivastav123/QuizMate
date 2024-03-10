import { createContext, useState } from "react"

export const CustomContext=createContext();
export const CustomContextProvider =({children})=>{
    const [questionInfo,setQuestionInfo]=useState([]);
    const [totalQ,setTotalQ]=useState(0);

    let value={
        
        questionInfo,
        setQuestionInfo,
        totalQ,
        setTotalQ
    }
    return (
        <CustomContext.Provider value={value}>
            {children}
        </CustomContext.Provider>
    )

}