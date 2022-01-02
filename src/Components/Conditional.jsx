import React,{useState} from 'react'

const ConditionalRendering = () => {
    const [login,setLogin]=useState(false)
    return (
        <>
           
               {/* The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in. */}
          {/* {
              if (login){
                  console
              }
              esleP
          } */}
{/* 
          if(x==5){

          }
          if else(){

          }
          else{

          }

          login==5 ?'maham' : 'not' */}
          {/* {
              login ? '<h1> True </h1>' : 'False'
          } */}

{/* {
              login ? '<h1> True </h1>' : null
          } */}
          {
              login && 'maham'
          }
        </>
    )
}

export default ConditionalRendering
