import React,{useState} from 'react'

const UseStateExample = () => {
    const [counter,setCounter]=useState(0)

    const increaseCount =()=>{
        setCounter(counter+1)
    }

    const decreaseCount =()=>{
        setCounter(counter-1)
    }


  return (
    <div>
 {counter}
<button onClick={increaseCount}>Increment</button>
<button onClick={decreaseCount}>Decrement</button>

    </div>
  )
}

export default UseStateExample