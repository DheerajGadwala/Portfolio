import React from 'react';
import Navbar from './components/navbar';
import TypingAnimation from './components/typingAnimation';
import AboutMe from './components/aboutMe';
import Intro from './components/intro';
import EducationBlock from './components/education';
import Projects from './components/projects';
import './App.css';

const App = ()=>{
    const [animationItems, setAnimationItems] = React.useState(['a tech enthusiast', 'a full-stack developer', 'a free spirit',  'a gamer', 'a react Developer', 'a humanist', 'a programmer', 'a history nerd', 'a dreamer']);

    return (
        <>
            <div className="stagingArea1">
                <Navbar/>
                <div className="container flexDirection">
                    <div>
                        <AboutMe/>
                    </div>
                    <div className="homeSide2">
                        <TypingAnimation animationItems = {animationItems} />
                        <Intro/>
                    </div>
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
    </>
  );
}

export default App;
