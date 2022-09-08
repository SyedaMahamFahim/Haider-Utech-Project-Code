import React,{useState} from 'react'
import "./mapExample.css"
const LoginSystem = () => {
    const[isAdmin,setIsAdmin]=useState(false)
    const[password,setPassword]=useState()

   
    const getUserPassword=(e)=>{
       const getUserValue=e.target.value;
       setPassword(getUserValue)
    }
    const checkPassword =()=>{
        console.log("this is password",password)

        if(password!=="HaiderProgrammer"){
            alert("You are not allow")
        }
        else{
            setIsAdmin(true)
        }
    }
  return (
   <>
   
   <div className={`${isAdmin? "hide": "container"}`}>
       <div className="row">
       <h1 className='employe_details'>Login System</h1>
       <label htmlFor="">Enter your password</label> <br/> <br/>
       <h2 style={{textAlign:"center"}}>Admin</h2>
       <input type="text" name="" id="" value={password} onChange={getUserPassword} />
       <button onClick={checkPassword}>Submit</button>
       </div>
   </div>

<div>
    
</div>
<div  >
    {
       isAdmin?"Welcome back Admin" : ""
    }
</div>
   
   </>
  )
}

export default LoginSystem