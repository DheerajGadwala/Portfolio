import React, {useEffect} from 'react';
import './style.css';

const Intro = ()=>{
    return(<>
        <div className="IntroArea">
            <div className="introList">
                <span className="heading">My background</span>
                <span className="introListText">I'm currently pursuing my MS in Computer Science at Northeastern University, Boston with a focus on Software Engineering and Data Science.</span>      
            </div>
            <div className="introBar"></div>
            <div className="introList">
                <span className="heading">What have I done so far?</span>
                <span className="introListText"> I have learned quite a few programming languages, developed some basic <a href="https://github.com/DheerajGadwala">projects</a>, and mastered efficient and effective <a href="https://www.hackerrank.com/drgad24">programming</a>.</span>
            </div>
            <div className="introBar"></div>
            <div className="introList">
                <span className="heading">What do I want to do?</span>
                <span className="introListText"> Discover and work on evolving societal requirements, with a prime interest in algorithms, data science, and software development. </span>      
            </div>
        </div>
    </>);
}

export default Intro;