import React,{useEffect,useState} from 'react'

const Effect = () => {
    const [counter,setCounter] =useState(0)

    useEffect(()=>{
        alert("UseEffect")
    })
    return (
        <>
            <h1>UseEffect</h1>
            <h1>{counter}</h1>
            <button onClick={()=>setCounter(counter+1)}>Increase</button>
        </>
    )
}

export default Effect
