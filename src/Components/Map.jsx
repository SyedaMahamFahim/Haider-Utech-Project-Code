import React from 'react'
// Map sirf array par chlta 
// Object pAR NHI CHALTA
const Map = () => {
    // const arry=[1,2,3,4,5,6,7,8,9,10]
    const arrOfObect=[
        {
          id:1,
          name:"f1"
        },
        {
            id:2,
            name:"f2"
        }
    ]


    return (
        <>
            {/* {
                arry.map((val,index)=>{
                    return(
                        <>
                        <h1 key={index}>{val}</h1>
                        </>
                    )
                })
            } */}

{
                arrOfObect.map((val,index)=>{
                    return(
                        <>
                        <h1 key={index}>{val.id}</h1>
                        </>
                    )
                })
            }
        </>
    )
}

export default Map
