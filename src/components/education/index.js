import React from 'react';
import EducationElement from './educationElement';
import jgs from './images/JGS.png';
import fiitjee from './images/FIITJEE.png';
import vit from './images/VIT.png';
import './style.css';


const EducationBlock = ()=>{
    var ret = [];

    ret.push(
        <div key="0" className="EducationTitle">
            Education
        </div>
    );
    ret.push(<EducationElement 
        Name="Vellore Institute of Technology"
        Level="B.tech CSE"
        Score="8.81 CGPA"
        Year="2017-present"
        Image={vit}
        key="1"
        />);
    ret.push(
        <div key="1.5" className="EducationBar"></div>
    );
    ret.push(<EducationElement 
        Name="Fiitjee Junior College"
        Level="TSBIE intermediate education"
        Score="90.6%"
        Year="2015-2017"
        Image={fiitjee}
        key="2"
        />);
    ret.push(
        <div key="2.5" className="EducationBar"></div>
    );
    ret.push(<EducationElement 
        Name="Johnson Grammar School"
        Level="10th standard I.C.S.E"
        Score="91.5%"
        Year="2006-2015"
        Image={jgs}
        key="3"
        />);

    return(
        <div className = "EducationArea">
            {ret}
        </div>
    );
}

export default EducationBlock;