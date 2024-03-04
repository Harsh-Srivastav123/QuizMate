import { createContext, useState } from "react"

export const CustomContext=createContext();
export const CustomContextProvider =({children})=>{
    const [category,setCategory]=useState("");
    const [number,setNumber]=useState("");
    const [difficulty,setDifficulty]=useState("");
    const [totalques,setTotalques]=useState("");
    const [questionList,setQuestionList]=useState([]);

    let value={
        category,
        setCategory,
        number,
        setNumber,
        difficulty,
        setDifficulty,
        totalques,
        setTotalques,
        questionList,
        setQuestionList
    }
    return (
        <CustomContext.Provider value={value}>
            {children}
        </CustomContext.Provider>
    )

}