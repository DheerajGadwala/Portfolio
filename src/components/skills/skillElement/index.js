import React, {useRef} from 'react';
import './style.css';

const SkillsElement = (props)=>{
    return (
        <>
            <div className="skillItem" ref = {props.refs[props.id]}>
                <div><img className="skillIcon" src={props.icon}/></div>
                <div className="skillName">{props.skill}</div>
            </div>
        </>
    );
}

export default SkillsElement;