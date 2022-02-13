let num=0;
let increaseCounterValue=document.getElementById('increment')
let counterValue=document.getElementById('counter-value')

increaseCounterValue.addEventListener("click",()=>{
    num++;
    counterValue.innerText=num;
})

const decreaseCounter=()=>{
    num--;
    if(num < 0){
        num=0;
        counterValue.innerText=num;
    }else{
        counterValue.innerText=num;
    }
 

}
function reset(){
    num=0;
    counterValue.innerText=num;
}

