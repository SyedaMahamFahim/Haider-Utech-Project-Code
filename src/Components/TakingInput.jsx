import React,{useState} from 'react'

const TakingInput = () => {
const [userInput,setUserInput]=useState('')
       const handleSubmit = () => {
          console.log(userInput)
        }
    return (
        <>
            <h1>User Input</h1>
            <input type="text"
            onChange={(e)=>setUserInput(e.target.value)}
            value={userInput}
            />
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default TakingInput








