import React, {useRef} from 'react';
import './style.css';

const Navbar = (props)=>{


    const scrollAboutMe = ()=>{
        props.scrollToRef(props.aboutMeRef);
    }
    const scrollEducation = ()=>{
        props.scrollToRef(props.educationRef);
    }
    const scrollProjects = ()=>{
        props.scrollToRef(props.projectsRef);
    }
    const scrollSkills = ()=>{
        props.scrollToRef(props.skillsRef);
    }
    const scrollContactMe = ()=>{
        props.scrollToRef(props.contactMeRef);
    }

    const openMenu = ()=>{
        //openMenu
        document.querySelector('.navitems').classList.toggle('burgerClick');
        //fadeIn nav items
        document.querySelectorAll('.navitems li').forEach((element, index)=>{
            if(!element.style.animation)
                element.style.animation = `navitems-fadein 0.5s ease forwards ${0.2+index/10}s`;
            else
                element.style.animation = ``;
        });
    }

    window.addEventListener('scroll', ()=>{
        var navbar = document.querySelector('.navbar');
        if(window.pageYOffset>=navbar.clientTop)
            navbar.classList.add("stick");
        else
            navbar.classList.remove("stick");
    });

    return(
        <>
        <div className="navbar stick">
            <div className="name">
                <span>Dheeraj Gadwala</span>
            </div>
            <ul className="navitems">
                <li onClick={scrollAboutMe}>About Me</li>
                <li onClick={scrollEducation}>Education</li>
                <li onClick={scrollProjects}>Projects</li>
                <li onClick={scrollSkills}>Skills</li>
                <li onClick={scrollContactMe}>Contact</li>
            </ul>
            <div className="burger" onClick={openMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        </>
    );
}

export default Navbar;