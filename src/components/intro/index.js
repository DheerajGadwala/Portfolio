import React, {useEffect} from 'react';
import './style.css';

const Intro = ()=>{
    return(<>
        <div className="IntroArea">
            <div className="introList">
                <span className="heading">My background</span>
                <span> Graduated from <a href="https://vit.ac.in/">Vellore Institute of technology (VIT)</a> at Vellore, India with a baccalaureate degree in technology specializing in Computer Science and Engineering. </span>      
            </div>
            <div className="introBar"></div>
            <div className="introList">
                <span className="heading">What have I done so far?</span>
                <span> I have learned quite a few programming languages, developed some basic <a href="https://github.com/DheerajGadwala">projects</a>, and learned efficient and effective <a href="https://www.hackerrank.com/drgad24">programming</a>.</span>
            </div>
            <div className="introBar"></div>
            <div className="introList">
                <span className="heading">What do I want to do?</span>
                <span> Discover and work on evolving societal requirements, with a prime interest in algorithms, data science, and software development. </span>      
            </div>
        </div>
    </>);
}

export default Intro;