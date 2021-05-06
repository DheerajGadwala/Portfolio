import React from 'react';
import Navbar from './components/navbar';
import TypingAnimation from './components/typingAnimation';
import AboutMe from './components/aboutMe';
import './App.css';

const App = ()=>{
    const [animationItems, setAnimationItems] = React.useState(['Tech Enthusiast', 'Full-Stack Developer', 'Gamer', 'React Developer', 'Humanist']);

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
                    </div>
                </div>
            </div>
    </>
  );
}

export default App;
