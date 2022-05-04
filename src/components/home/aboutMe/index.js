import React, {useEffect} from 'react';
import './style.css';
import myPic from './images/Myphoto.jpeg'

const AboutMe = ()=>{
    return(<>
        <div className="aboutMeArea">
            <div className="picDiv">
                <img  src={myPic} className = "myPic"/>
            </div>
            <div className="aboutMeContent">
                <div className="aboutMeTitle">
                    About Me
                </div>
                <div className="aboutMeText">
                I am an engineer at heart who loves designing, developing, testing, and problem-solving. I am skilled in full-stack web development, algorithms, object-oriented programming, and database management systems.
               </div>
            </div>
        </div>
    </>);
}

export default AboutMe;