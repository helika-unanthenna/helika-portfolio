import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
//import './App.css'

function App() {
  return (
    
      <div className=" bg-gray-50">
        <Navbar />
        <Hero />
        <Skills/>
        <Projects />
        <Contact />
        <Footer/>
      </div>
    
  );
}

export default App;
