import React from 'react';
import SkillsElement from './skillElement';
import './style.css';
import Python3 from './images/Python3.png'
import Java from './images/Java.png';
import DSA from './images/Data Structures and Algorithms.png';
import ReactJS from './images/React JS.png';
import NodeJS from './images/Node JS.png';
import VanillaJS from './images/Vanilla JS.png';
import PHP from './images/PHP.png';
import SQL from './images/SQL.png';
import RESTAPI from './images/REST API.png';
import HTML  from './images/HTML.png';
import CSS from './images/CSS.png';
import Trilingual  from './images/Trilingual.png';
import Synergetic from './images/Synergetic.png';
import TeamManagement from './images/Team Management.png';


const Skills = ()=>{

    var skills = ["Python3", "Java", "Data Structures and Algorithms", "React JS", "Node JS", "Vanilla JS", "PHP", "SQL", "REST API", "HTML", "CSS", "Trilingual", "Synergetic", "Team Management"];
    var skillImages = [Python3, Java, DSA, ReactJS, NodeJS, VanillaJS, PHP, SQL, RESTAPI, HTML , CSS, Trilingual , Synergetic, TeamManagement];
    var ret = [];
    
    for(var i=0; i<skills.length; i++){
        ret.push(<SkillsElement key={i} skill={skills[i]} icon={skillImages[i]}/>)
    }

    return (
        <>
            <div className="skillsArea">
                <div className="skillsTitle">
                    <h2>
                        Skills
                    </h2>
                </div>
                <div className="skillsContainer">
                    {ret}
                </div>
            </div>
        </>
    );
}

export default Skills;