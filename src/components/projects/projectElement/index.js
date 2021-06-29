import React from 'react';
import './style.css';
import githubIcon from './Images/github.png';
import linkIcon from './Images/link.png';

const ProjectElement = (props)=>{
    var links;
    if(props.GitHubLink != '' && props.Link != '')
        links= (<span className="ProjectLinks"><a href={props.GitHubLink}><img className="ProjectsIcon" src={githubIcon}></img><section>Github Link</section></a><a href={props.Link}><img className="ProjectsIcon" src={linkIcon}></img><section>Web Link</section></a></span>);
    else if(props.GitHubLink != '')
        links= (<span className="ProjectLinks"><a href={props.GitHubLink}><img className="ProjectsIcon" src={githubIcon}></img><section>Github Link</section></a></span>);
    else if(props.Link != '')
        links= (<span className="ProjectLinks"><a href={props.Link}><img className="ProjectsIcon" src={linkIcon}></img><section>Web Link</section></a></span>);
    else
        links= (<span className="ProjectLinks"></span>);
    return (
        <>
            <div className={props.id%2==0?"ProjectElement leftProjectElement":"ProjectElement rightProjectElement"} ref = {props.refs[props.id]}>
                <div>
                    <span className="ProjectTitle">{props.Title}</span>
                    <span className="ProjectBar"></span>
                    <span className="ProjectDescription">{props.Explanation}</span>
                    {links}
                </div>
            </div>
        </>
        );
}

export default ProjectElement;