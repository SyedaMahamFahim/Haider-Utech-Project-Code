import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Courses from '../pages/Courses';
import {

  Routes,
  Route,
} from "react-router-dom";
import CourseDetail from '../pages/CourseDetail';
import Registration from '../pages/Registration';
import Cart from '../pages/Cart';

const config = () => {
  return (
    <>
     <Routes>
     <Route path="/" exact element={<Home />}/>
     <Route path="/about" exact element={<About />}/>
    
     <Route path="/login-signup" exact  element={<Registration/>}/>
     <Route path="/cart" exact element={<Cart/>}/>

     <Route path="/courses" exact element={<Courses />}/>
     <Route path="/courses/:id" element={<CourseDetail />}/>
    </Routes>
    </>
  )
}

export default config