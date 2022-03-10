// import logo from './logo.svg';
// import './App.css'
import React from "react"
import Header from "./Header"
import Navbar from './Navbar'
import HowItWorks from './HowItWorks'
import About from './About';
import Skills from './Skills'
import Contact from './Contact.js'
import Footer from './Footer.js'
function Home() {
  return (
    <>
      <Navbar/>
    <Header/>
    <HowItWorks/>
    <About/>
    <Skills/>
    <Contact/>
    <Footer/>
    </>
    
  );
}

export default Home;
