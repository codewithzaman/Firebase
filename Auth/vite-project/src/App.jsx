import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/registartion/Login';
import Signup from './pages/registartion/Signup';

const App = () => {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>

      
    </Routes>
   </Router>
  )
}

export default App