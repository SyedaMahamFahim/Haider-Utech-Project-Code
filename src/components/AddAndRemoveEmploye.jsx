import React,{useState}from 'react'
import "./mapExample.css"
const AddAndRemoveEmploye = () => {
    const [inputEmployee,setInputEmployee]=useState('')
    const [employee,setEmployee]=useState([])
  
 
    const addEmployee=()=>{
        if(inputEmployee==""){
            alert("Enter the employee name")
        }
        else{
            setEmployee([...employee,inputEmployee])
            setInputEmployee('')
        }

        console.log(employee)
    }
    const removeAllEmployee=()=>{
        const confirmation=window.confirm("Are you sure?")
        if(confirmation) return setEmployee([])
    }
    const deleteEmployee=(id)=>{
       
        const confirmation=window.confirm("Are you sure?")
        if(confirmation){
            const updateEmployee=employee.filter((value,index)=>{
                return index !== id;
            })
            setEmployee(updateEmployee)
        }
        
    }
  return (
    <>
    <div className="container">
    <div className="row">
        <h1>Add Employee</h1>
        {inputEmployee} <br/> <br/>
        <input type="text" placeholder='Add Employee' value={inputEmployee}
        onChange={(e)=>setInputEmployee(e.target.value)}
        />
        <button onClick={addEmployee}>Add Employee</button>
    </div>

    <div className="row">
        {
            employee.map((value,index)=>{
                return(
                    <>
                    <p key={index}>{value}</p>
                    <button onClick={()=>deleteEmployee(index)}>Delete Employee</button>
                    </>
                )
            })
        }
    </div>
<br/> <br/> 
    <button onClick={removeAllEmployee}>Remove All Employee</button>
    </div>
    </>
  )
}

export default AddAndRemoveEmploye