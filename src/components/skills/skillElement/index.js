import React from 'react';
import './style.css';

const SkillsElement = (props)=>{
    return (
        <>
            <div className="skillItem">
                <div><img className="skillIcon" src={props.icon}/></div>
                <div className="skillName">{props.skill}</div>
            </div>
        </>
    );
}

export default SkillsElement;