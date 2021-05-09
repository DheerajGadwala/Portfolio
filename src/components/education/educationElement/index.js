import React from 'react';
import mapsLogo from './images/googleMaps.png';
import './style.css';

const EducationElement = (props)=>{
    return(
        <div className="EducationElement">
            <div className="EducationPrime">
                <div className="ElementLeft">
                    <div className="InstitutionName">{props.Name}</div>
                </div>
                <div className="ElementBar"></div>
                <div className="ElementRight">
                    <div className="">{props.Level}</div>
                    <div className="">{props.Score}</div>
                    <div className="">{props.Year}</div>
                </div>
            </div>
            <div className="mapsLink">
                <a href={props.MapsLink}>
                    <img className="mapsLogo" src = {mapsLogo}/>
                </a>
                <a href={props.MapsLink}>
                    <section className="linkText">
                        Location
                    </section>
                </a>
            </div>
        </div>
    );
}

export default EducationElement;