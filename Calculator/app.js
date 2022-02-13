let displayResult=document.getElementById('display')
const getNumber=(number)=>{
     displayResult.value+=number
}

let clearBtn=()=>{
    displayResult.value=""
}
let getResult=()=>{
    displayResult.value=eval(displayResult.value)
}