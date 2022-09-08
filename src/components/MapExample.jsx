import React from 'react'
import './mapExample.css'
const MapExample = () => {

    const empolyesDetail=[
        {
            id:1,
            img:"",
            name:"Ali",
            email:"ali@gmail.com",
            position:"Fullstack developer"
        },
        {
            id:2,
            img:"",
            name:"Haider",
            email:"haider@gmail.com",
            position:"CEO"
        },
        {
            id:3,
            img:"",
            name:"Umar",
            email:"umar@gmail.com",
            position:"Engineer"
        },
        {
            id:4,
            img:"",
            name:"Usman",
            email:"usman@gmail.com",
            position:"UX/UI Designer"
        },
        
    ]
  return (
    <div className="container">
        <div className="row">
            <h1 className='employe_details'>Employee Details</h1>
            <ol>

            
         {
             empolyesDetail.map((value,index)=>{
                 return(
                     <>
                     <li>
                         <h1>{value.name}</h1>
                         <h3>{value.email}</h3>
                         <h3>{value.position}</h3>
                     </li>

                     </>
                 )
             })
         }
         </ol>
        </div>
    </div>
  )
}

export default MapExample