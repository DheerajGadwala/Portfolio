import React, {useRef, useState, useEffect} from 'react';
import EducationElement from './educationElement';
import './style.css';


const EducationBlock = ()=>{
    const [ret, setRet] = useState(``);
    const [refs, setRefs] = useState([useRef(null), useRef(null), useRef(null), useRef(null)]);

    useEffect(() => {
        let ret = [];
        ret.push(
            <div key="0" className="EducationTitle">
                <h2>Academics</h2>
            </div>
        );
        ret.push(<EducationElement 
            Name="Northeastern University, Khoury College of Computer Sciences"
            Level="MSc in Computer Science"
            Score="CGPA: 0.00/4.00"
            Year="2021-present"
            MapsLink="https://goo.gl/maps/9oAZtUsMsB1UFwFP7"
            key="1"
            id= "0"
            refs = {refs}
            />);
        ret.push(
            <div key="1.5" className="EducationBar"></div>
        );
        ret.push(<EducationElement 
            Name="Vellore Institute of Technology"
            Level="B.Tech in Computer Science and Engineering"
            Score="CGPA: 8.92/10.00"
            Year="2017-2021"
            MapsLink="https://www.google.com/maps/place/Vellore+Institute+of+Technology/@12.9717482,79.1572278,17z/data=!3m1!4b1!4m5!3m4!1s0x3bad479f0ccbe067:0xfef222e5f36ecdeb!8m2!3d12.971743!4d79.1594165"
            key="2"
            id= "1"
            refs = {refs}
            />);
        ret.push(
            <div key="2.5" className="EducationBar"></div>
        );
        ret.push(<EducationElement 
            Name="Fiitjee Junior College"
            Level="Math, Physics & Chemistry"
            Score="Percentage: 90.6%"
            Year="2015-2017"
            MapsLink="https://www.google.com/maps/place/FIITJEE+Junior+College+Dilsukhnagar/@17.3697104,78.5194598,17z/data=!3m1!4b1!4m5!3m4!1s0x3bcb98f7c595c94d:0x9cce87965a48d1f8!8m2!3d17.3697053!4d78.5216485"
            key="3"
            id= "2"
            refs = {refs}
            />);
        ret.push(
            <div key="3.5" className="EducationBar"></div>
        );
        ret.push(<EducationElement 
            Name="Johnson Grammar School"
            Level="10th Standard I.C.S.E Board"
            Score="Percentage: 91.5%"
            Year="2006-2015"
            MapsLink="https://www.google.com/maps/place/Johnson+Grammar+School+Mallapur+ICSE/@17.437458,78.5523433,16.46z/data=!4m5!3m4!1s0x3bcb9969d069e135:0xdfcdb543752ba156!8m2!3d17.437479!4d78.5537481"
            key="4"
            id="3"
            refs = {refs}
            />);
        setRet(ret);

        let prevScroll = window.innerHeight;
        window.addEventListener('scroll', ()=>{
            for(var i=0; i<refs.length; i++){
                if(prevScroll <= refs[i].current.offsetTop+200 && refs[i].current.offsetTop+200 <= window.innerHeight + window.scrollY){
                    //Down Scroll
                    refs[i].current.style.animation = `educationElement-slideIn 0.5s`;
                    refs[i].current.classList.add("EducationElementVisibility");
                }
                if(prevScroll >= refs[i].current.offsetTop+200 && refs[i].current.offsetTop+200 >= window.innerHeight + window.scrollY){
                    //Up Scroll
                    refs[i].current.style.animation = `educationElement-slideOut 0.5s`;
                    refs[i].current.classList.remove("EducationElementVisibility");
                }
            }
            prevScroll = window.innerHeight + window.scrollY;
        });
    }, []);

        /*Make changes in style.css if you add more education elements*/
    return(
        <div className = "EducationArea">
            {ret}
        </div>
    );
}

export default EducationBlock;