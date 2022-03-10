// import logo from './logo.svg';
// import './App.css'
import React from "react"
import ReactDOM from "react-dom"
import Home from "./Home"
// import {Route,Switch} from "react-router-dom"
import {  Routes ,Route} from 'react-router-dom';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Skills from "./pages/Skills";
function App() {
  return (
    <>
     
   
     <Routes>
     <Route exact path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Skills" element={<Skills/>}/>

    <Route path="/Error" element={<Error/>}/>
     </Routes>
  
    
    
    
    
    
    </>
    
  );
}

export default App;
