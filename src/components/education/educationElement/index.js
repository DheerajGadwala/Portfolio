import React from 'react';
import './style.css';

const EducationElement = (props)=>{
    return(
        <div className="EducationElement">
            <div>
                <img className="InstitutionImage" src = {props.Image}/>
            </div>
            <div>
                <span className="InstitutionName">{props.Name}</span>
                <span className="">{props.Level}</span>
                <span className="">{props.Score}</span>
                <span className="lastElement">{props.Year}</span>
            </div>
        </div>
    );
}

export default EducationElement;