import React from 'react';
import Navbar from './components/navbar';
import TypingAnimation from './components/typingAnimation';
import AboutMe from './components/aboutMe';
import Intro from './components/intro';
import './App.css';

const App = ()=>{
    const [animationItems, setAnimationItems] = React.useState(['Tech Enthusiast', 'Full-Stack Developer', 'Free Spirit',  'Gamer', 'React Developer', 'Humanist', 'Programmer']);

    return (
        <>
            <div className="stagingArea">
                <Navbar>

                </Navbar>
                <div className="container">
                    <div>
                        <AboutMe>
                        </AboutMe>
                    </div>
                    <div>
                        <TypingAnimation 
                        animationItems = {animationItems}
                        >
                        </TypingAnimation>
                        <Intro>
                        </Intro>
                    </div>
                </div>
            </div>
    </>
  );
}

export default App;
