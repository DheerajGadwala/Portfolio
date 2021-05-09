import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import EducationBlock from './components/education';
import Projects from './components/projects';
import Skills from './components/skills';
import './App.css';

const App = ()=>{
    
    return (
        <>
            <Navbar/>
            <div className="stagingArea1">
                <div className="container flexDirection">
                    <Home/>
                </div>
            </div>
            <div className="stagingArea2">
                <div className="container">
                    <EducationBlock/>
                </div>
            </div>
            <div className="stagingArea3">
                <div className="container">
                    <Projects/>
                </div>
            </div>
            <div className="stagingArea4">
                <div className="container">
                    <Skills/>
                </div>
            </div>
            <div className="stagingArea5">
                <div className="container">
                </div>
            </div>
    </>
  );
}

export default App;
