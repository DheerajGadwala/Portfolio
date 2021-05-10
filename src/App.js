import React, {useRef} from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import EducationBlock from './components/education';
import Projects from './components/projects';
import Skills from './components/skills';
import ContactMe from './components/contactMe';
import './App.css';

const App = ()=>{

    const scrollToRef = (ref)=> window.scrollTo({top: ref.current.offsetTop, left: 0,  behavior: 'smooth'});
    const aboutMeRef = useRef(null);
    const educationRef = useRef(null);
    const projectsRef = useRef(null);
    const skillsRef = useRef(null);
    const contactMeRef = useRef(null);

    return (
        <>
            <Navbar 
                aboutMeRef={aboutMeRef}
                educationRef={educationRef}
                projectsRef={projectsRef}
                skillsRef={skillsRef}
                contactMeRef={contactMeRef} 
                scrollToRef={scrollToRef}
            />
            <div className="stagingArea1" ref={aboutMeRef}>
                <div className="container flexDirection">
                    <Home/>
                </div>
            </div>
            <div className="stagingArea2" ref={educationRef}>
                <div className="container">
                    <EducationBlock/>
                </div>
            </div>
            <div className="stagingArea3" ref={projectsRef}>
                <div className="container">
                    <Projects/>
                </div>
            </div>
            <div className="stagingArea4" ref={skillsRef}>
                <div className="container">
                    <Skills/>
                </div>
            </div>
            <div className="stagingArea5" ref={contactMeRef}>
                <div className="container">
                    <ContactMe/>
                </div>
            </div>
    </>
  );
}

export default App;
