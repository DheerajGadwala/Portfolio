import React from 'react';
import AboutMe from './aboutMe';
import TypingAnimation from './typingAnimation';
import Intro from './intro';
import './style.css';

const Home = ()=>{

    const [animationItems, setAnimationItems] = React.useState(['a tech enthusiast', 'a full-stack developer', 'a free spirit',  'a gaming ninja', 'a react developer', 'a humanist', 'a programmer', 'a history nerd', 'a dreamer']);

    return (
        <>
            <div>
                <AboutMe/>
            </div>
            <div className="homeSide2">
                <TypingAnimation animationItems = {animationItems} />
                <Intro/>
            </div>
        </>
    );
}

export default Home;