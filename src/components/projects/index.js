import React, {useEffect} from 'react';
import './style.css';
import ProjectElement from './projectElement';

const Projects = ()=>{

    var n = 5; // number of projects
    
    n = Math.floor((n+1)/2)*2;

    const generateArea = ()=>{
        var ret = [];
        ret.push(
            <ProjectElement
                key="1"
                Title = "Sorting Visualizer"
                Explanation = "A visualization tool for six sorting algorithms {bubble, insertion, selection, merge, heap, and quick sorts} using HTML, CSS and, javascript."
                GitHubLink = "https://github.com/DheerajGadwala/sorting-visualizer"
                Link= "https://dheerajgadwala.github.io/sorting-visualizer/"            
            />
        );
        ret.push(
            <ProjectElement
                key="2"
                Title = "Portfolio Website"
                Explanation = "Portfolio website using react js."
                GitHubLink = "https://github.com/DheerajGadwala/PortfolioOld"
                Link= "https://drgad24.s3.ap-south-1.amazonaws.com/index.html"            
            />
        );
        ret.push(
            <ProjectElement
                key="3"
                Title = "Responsive Website building"
                Explanation = "includes an animated navigation bar, a courosell, smooth scrolling, animations on scrolling."
                GitHubLink = "https://github.com/DheerajGadwala/Responsive-Website-Building"
                Link= ""            
            />
        );
        ret.push(
            <ProjectElement
                key="4"
                Title = "Social Networking Website"
                Explanation = "A Social Networking website on PHP, HTML and CSS and MYSQL."
                GitHubLink = "https://github.com/DheerajGadwala/SocialNetworkingWebsite"
                Link= ""            
            />
        
        );
        ret.push(
            <ProjectElement
                key="5"
                Title = "Identify"
                Explanation = "A DAPP for authentication and authorization processes in Indian PDSs, further explained on github."
                GitHubLink = "https://github.com/DheerajGadwala/Identify"
                Link= ""            
            />
        
        );
        return (
            <div className="ProjectArea">
                <div className="ProjectsTitle">
                    <h2>Projects</h2>
                </div>
                {ret}
            </div>
        );
    }

    return (
        <>
            {generateArea()}
        </>
        );
}

export default Projects;