import React from 'react'

const Map = () => {
    const arry=[1,2,3,4,5,6,7,8,9,10]
    return (
        <>
            {
                arry.map((val,index)=>{
                    return(
                        <>
                        <h1 key={index}>{val}</h1>
                        </>
                    )
                })
            }
        </>
    )
}

export default Map
