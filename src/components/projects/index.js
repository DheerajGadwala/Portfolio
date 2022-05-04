import React, {useEffect, useState, useRef} from 'react';
import './style.css';
import ProjectElement from './projectElement';

const Projects = ()=>{

    const [ret, setRet] = useState(``);
    const [refs, setRefs] = useState(
        [
            useRef(null), useRef(null), useRef(null),
            useRef(null), useRef(null), useRef(null), 
            useRef(null), useRef(null), useRef(null), 
            useRef(null),
        ]
        );
    // add 1 useRef(null) for every project;
    const Projects = [
        [
            "Decision Trees on Distributed Systems",
            "Implemented Decision trees Machine learning algorithm on Distributed systems from scratch. Applied the algorithm to predict the ratings (0 - 4) for large-scale music data, leveraging AWS EC2 clusters.",
            "",
            ""
        ],
        [
            "Twitter Sentiment Analysis",
            "In this project, we train and test a different model such as Support Vector Machine, Decision Trees, K-Nearest Neighbors, Logistic Regression, etc. and compare their performance based on accuracy and choose the best model for the application.",
            "https://github.com/DheerajGadwala/Sentiment-Analysis-on-Twitter-Data",
            ""
        ],
        [
            "Checkmate",
            "Designed, developed, and deployed a game application (Chess) in 5 days as a personal challenge. The application is user-friendly, scalable, and features MVC architecture. It also has sound effects and animations.",
            "https://github.com/DheerajGadwala/chess",
            "www.dheerajgadwala.tech/chess"
        ],
        [
            "Dungeon",
            "A Game developed using Java and the Swing Framework where a player has to find his way out of the dungeon amidst monsters and thieves, his only protection is his trusty bow and his sharp sense of smell and sound.  The player can collect treasure that he may find in various caves in the dungeon and has to kill a monster that is guarding the exit to the dungeon to escape.",
            "https://github.com/DheerajGadwala/Dungeon",
            "https://cso-drgad.s3.ap-south-1.amazonaws.com/Dungeon.jar"
        ],
        [
            "Sorting Visualizer", 
            "A visualization tool for six sorting algorithms {bubble, insertion, selection, merge, heap, and quick sorts} using HTML, CSS and, javascript.", 
            "https://github.com/DheerajGadwala/sorting-visualizer", 
            "https://dheerajgadwala.github.io/sorting-visualizer/"
        ],
        [
            "Notepad Web Application",
            "A notepad application that uses reactjs and firebase's Backend as a Service [BaaS] tools namely auth and firestore.",
            "https://github.com/DheerajGadwala/Notepad_gfb",
            "https://notepad.dheerajgadwala.tech/"
        ],
        [
            "Identify DAPP",
            "A DAPP hosted on a private Ethereum network created using Hyperledger Besu. It can be used for authentication and authorization processes in Indian PDSs. For more information, read the github description.",
            "https://github.com/DheerajGadwala/Identify",
            ""
        ],
        [
            "Responsive Website building",
            "includes an animated navigation bar, a courosell, smooth scrolling, animations on scrolling.",
            "https://github.com/DheerajGadwala/Responsive-Website-Building",
            ""
        ],
        [
            "Social Networking Website",
            "A Social Networking website on PHP, HTML and CSS and MYSQL.",
            "https://github.com/DheerajGadwala/SocialNetworkingWebsite",
            ""
        ],
        [
            "Sign-up and Sign-in in React Native",
            "A demo app that uses React Native and Firebase auth for login and sign-up functionalities. Login using google and facebook is available. Users can change password via email link.",
            "https://github.com/DheerajGadwala/AuthorizationInReactNative",
            ""
        ]
    ];

    useEffect(() =>{
        let i = 0;
        let ret = [];
        while(i<Projects.length){
            ret.push(
                <ProjectElement
                id={i.toString()}
                key={(i+1).toString()}
                Title = {Projects[i][0]}
                Explanation = {Projects[i][1]}
                GitHubLink = {Projects[i][2]}
                Link= {Projects[i][3]}
                refs = {refs}            
                />
            );
            i++;
        }
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