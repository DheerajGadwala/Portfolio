import React, {useRef, useState, useEffect} from 'react';
import EducationElement from './educationElement';
import './style.css';


const EducationBlock = ()=>{
    const [ret, setRet] = useState(``);
    const [refs, setRefs] = useState([useRef(null), useRef(null)]);

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
            Score="GPA: 4.00/4.00"
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