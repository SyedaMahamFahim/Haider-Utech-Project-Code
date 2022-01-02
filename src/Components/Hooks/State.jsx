import React,{useState} from 'react'

const State = () => {
    const [counter,setCounter] =useState(0)  
    // counter -- variable
    // setCounter --Function
    // useState(initial value)


    return (
        <>
            
            <h1>{counter}</h1>
            <button onClick={()=>setCounter(counter+1)}>Increase</button>
            <button onClick={()=>setCounter(counter-1)}>Decrease</button>
        </>
    )
}

export default State
