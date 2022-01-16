import React,{useState} from 'react'

const State = () => {
    const [name, setName] = useState("Maham")
    return (
        <div>
            <h1>{name}</h1>
            <button  onClick={()=>setName("Haider")}>Change the name</button>
        </div>
    )
}

export default State
