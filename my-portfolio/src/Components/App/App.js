import './App.css';
import Navbar from "../Navbar/Navbar";
import Homepage from '../Homepage/Homepage';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import CV from '../CV/CV';
import { Route, Routes } from "react-router-dom"



function App() {
  return (
    <>
    <Navbar />
    <div className='container'>
      <Routes> 
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
