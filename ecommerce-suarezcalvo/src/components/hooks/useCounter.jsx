import { useEffect, useState } from "react"

export const useCounter = (min,max)=>{
    const [count, setCount]= useState(min)
    
    const handdleAdd = () => {
        if(count < max){
            setCount(count + 1)
        }
    }

    const handdleSubtstract = () => {
        if(count > min){
            setCount(count - 1)
        }  
    }
    return{count, handdleAdd, handdleSubtstract}
}