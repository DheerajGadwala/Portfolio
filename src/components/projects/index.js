import React, {useEffect, useState, useRef} from 'react';
import './style.css';
import ProjectElement from './projectElement';

const Projects = ()=>{

    const [ret, setRet] = useState(``);
    const [refs, setRefs] = useState([useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)]);

    useEffect(() =>{
        let ret = [];
        ret.push(
            <ProjectElement
                id="0"
                key="1"
                Title = "Sorting Visualizer"
                Explanation = "A visualization tool for six sorting algorithms {bubble, insertion, selection, merge, heap, and quick sorts} using HTML, CSS and, javascript."
                GitHubLink = "https://github.com/DheerajGadwala/sorting-visualizer"
                Link= "https://dheerajgadwala.github.io/sorting-visualizer/"
                refs = {refs}            
            />
        );
        ret.push(
            <ProjectElement
                id="1"
                key="2"
                Title = "Portfolio Website"
                Explanation = "Portfolio website using react js."
                GitHubLink = "https://github.com/DheerajGadwala/PortfolioOld"
                Link= "https://drgad24.s3.ap-south-1.amazonaws.com/index.html"
                refs = {refs}            
            />
        );
        ret.push(
            <ProjectElement
                id="2"
                key="3"
                Title = "Responsive Website building"
                Explanation = "includes an animated navigation bar, a courosell, smooth scrolling, animations on scrolling."
                GitHubLink = "https://github.com/DheerajGadwala/Responsive-Website-Building"
                Link= ""
                refs = {refs}            
            />
        );
        ret.push(
            <ProjectElement
                id="3"
                key="4"
                Title = "Social Networking Website"
                Explanation = "A Social Networking website on PHP, HTML and CSS and MYSQL."
                GitHubLink = "https://github.com/DheerajGadwala/SocialNetworkingWebsite"
                Link= ""
                refs = {refs}            
            />
        
        );
        ret.push(
            <ProjectElement
                id="4"
                key="5"
                Title = "Identify"
                Explanation = "A DAPP for authentication and authorization processes in Indian PDSs, further explained on github."
                GitHubLink = "https://github.com/DheerajGadwala/Identify"
                Link= ""
                refs = {refs}            
            />
        
        );
        setRet(ret);

        let prevScroll = window.innerHeight;
        window.addEventListener('scroll', ()=>{
            for(var i=0; i<refs.length; i++){
                if(prevScroll <= refs[i].current.offsetTop+200 && refs[i].current.offsetTop+200 <= window.innerHeight + window.scrollY){
                    //Down Scroll
                    if(i%2==0)
                        refs[i].current.style.animation = `leftProjectElement-slideIn 0.5s`;
                    else
                        refs[i].current.style.animation = `rightProjectElement-slideIn 0.5s`;
                    refs[i].current.classList.add("ProjectElementVisibility");
                }
                if(prevScroll >= refs[i].current.offsetTop+200 && refs[i].current.offsetTop+200 >= window.innerHeight + window.scrollY){
                    //Up Scroll
                    if(i%2==0)
                        refs[i].current.style.animation = `leftProjectElement-slideOut 0.5s`;
                    else
                        refs[i].current.style.animation = `rightProjectElement-slideOut 0.5s`;
                    refs[i].current.classList.remove("ProjectElementVisibility");
                }
            }
            prevScroll = window.innerHeight + window.scrollY;
        });
    }, []);
    

    return (
        <>
            <div className="ProjectArea">
                <div className="ProjectsTitle">
                    <h2>Projects</h2>
                </div>
                {ret}
            </div>
        </>
        );
}

export default Projects;