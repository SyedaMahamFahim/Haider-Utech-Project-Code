import React from 'react'
import {Routes,Route} from "react-router-dom";
import { Home,Faqs } from '../pages';

const Config = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
        <Route path="/faqs" element={<Faqs/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default Config