import React from 'react';
import AboutMe from './aboutMe';
import TypingAnimation from './typingAnimation';
import Intro from './intro';
import './style.css';

const Home = ()=>{

    const [animationItems, setAnimationItems] = React.useState(['a tech enthusiast', 'a full-stack developer', 'a DAPP developer','a free spirit',  'a gaming ninja', 'a react developer', 'a humanist', 'a programmer', 'a history nerd', 'a dreamer']);

    return (
        <>
            <div className="home">
                <div className="homePart1">
                    <AboutMe/>
                </div>
                <div className="homePart2">
                    <TypingAnimation animationItems = {animationItems} />
                    <Intro/>
                </div>
            </div>
        </>
    );
}

export default Home;