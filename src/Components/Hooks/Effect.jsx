import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [counter, setCounter] = useState(0)

    // Every rerender
    // useEffect(() => {
    //     console.log("I run everytime this component rerenders")
    // });

    // onMount
    // useEffect(() => {
    //     console.log("I Only run once (When the component gets mounted)")
    // }, []);

    // // Condition based 
    useEffect(() => {
        console.log("I run everytime my condition is changed")
    }, [counter]);



    return (
        <>
            <h1>UseEffect</h1>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Increase</button>
        </>
    )
}

export default Effect
