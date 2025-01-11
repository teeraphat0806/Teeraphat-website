import { useState } from 'react'
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Router} from 'react-router-dom';


import Home from './components/Home'


function App() {


  return (
  <Router>
    <Routes>
     <Router path="/home" element={<Home />}/>
    </Routes>
  </Router>
  )
}

export default App
