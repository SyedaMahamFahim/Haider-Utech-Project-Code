import React from 'react'
import {
    Route,
    Routes
  } from "react-router-dom";
  import Index from '../Pages/Index';
  import EassyEditing from '../Pages/EassyEditing';
  import AssignmentEditing from '../Pages/AssignmentEditing';
  import DissertationEditing from '../Pages/DissertationEditing';
  import ThesisEditing from '../Pages/ThesisEditing'
const Configuration = () => {
    return (
        <>
       <Routes>
        <Route index element={<Index />} />
        <Route path="/eassy-editing" element={<EassyEditing />} />
        <Route path="/assignment-editing" element={<AssignmentEditing />} />
        <Route path="/dissertation-editing" element={<DissertationEditing />} />
        <Route path="/thesis-editing" element={<ThesisEditing />} />
    </Routes>
         
      
        </>
    )
}

export default Configuration
