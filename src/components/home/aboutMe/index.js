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
                    I am an industrious individual who is always ready to work in a team. I have a knack for programming and have experiences with various technologies like AI, IoT, ML, cloud, and software development. In the long run, I aim to run my own tech organization.
                </div>
            </div>
        </div>
    </>);
}

export default AboutMe;