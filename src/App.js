import React from 'react';
import Navbar from './components/navbar';
import TypingAnimation from './components/typingAnimation';
import AboutMe from './components/aboutMe';
import Intro from './components/intro';
import EducationBlock from './components/education';
import './App.css';

const App = ()=>{
    const [animationItems, setAnimationItems] = React.useState(['a tech enthusiast', 'a full-stack developer', 'a free spirit',  'a gamer', 'a react Developer', 'a humanist', 'a programmer', 'a history nerd', 'a dreamer']);

    return (
        <>
            <div className="stagingArea1">
                <Navbar/>
                <div className="container part1">
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
                <div className="container part2">
                    <EducationBlock/>
                </div>
            </div>
    </>
  );
}

export default App;
