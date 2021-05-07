import React from 'react';
import Navbar from './components/navbar';
import TypingAnimation from './components/typingAnimation';
import AboutMe from './components/aboutMe';
import Intro from './components/intro';
import './App.css';

const App = ()=>{
    const [animationItems, setAnimationItems] = React.useState(['a tech enthusiast', 'a full-stack developer', 'a free spirit',  'a gamer', 'a react Developer', 'a humanist', 'a programmer', 'a history nerd', 'a dreamer']);

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
