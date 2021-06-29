import React, {useEffect, useState, useRef} from 'react';
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
import DAPPS from './images/DAPPS.png';
import Blockchain from './images/Blockchain.png';


const Skills = ()=>{

    const [ret, setRet] = useState(``);
    const [refs, setRefs] = useState([useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)]);

    useEffect(()=>{
        let skills = ["Python3", "Java", "Data Structures and Algorithms", "Blockchain","React JS", "Node JS", "Vanilla JS", "PHP", "SQL", "REST API", "DAPPS", "HTML", "CSS", "Trilingual", "Synergetic", "Team Management"];
        let skillImages = [Python3, Java, DSA, Blockchain, ReactJS, NodeJS, VanillaJS, PHP, SQL, RESTAPI, DAPPS, HTML , CSS, Trilingual , Synergetic, TeamManagement];
        let ret = [];
        
        for(var i=0; i<skills.length; i++){
            ret.push(<SkillsElement key={i} id={i} refs={refs} skill={skills[i]} icon={skillImages[i]}/>);
            console.log(refs);
        }
        setRet(ret);
        console.log(refs);

        let prevScroll = window.innerHeight;
        window.addEventListener('scroll', ()=>{
            for(var i=0; i<refs.length; i++){
                if(prevScroll <= refs[i].current.offsetTop+100 && refs[i].current.offsetTop+100 <= window.innerHeight + window.scrollY){
                    //Down Scroll
                    refs[i].current.style.animation="skillItem-fadeIn 0.5s";
                    refs[i].current.classList.add("skillItemVisibility");
                }
                if(prevScroll >= refs[i].current.offsetTop+100 && refs[i].current.offsetTop+100 >= window.innerHeight + window.scrollY){
                    //Up Scroll
                    refs[i].current.style.animation="skillItem-fadeOut 0.5s";
                    refs[i].current.classList.remove("skillItemVisibility");
                }
            }
            prevScroll = window.innerHeight + window.scrollY;
        });
    }, []);

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