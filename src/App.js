import logo from './logo.svg';
import './App.css';
import React from 'react';
import data from './data';
import Basic from './Basic';

const App=()=> {
  
  return (
    <div className="App">
     {
       data.map((val,index)=>{
         return(
           <>
           <Basic val={val} index={index}/>
           </>
         )
       })
     }
    </div>
  );
}

export default App;
