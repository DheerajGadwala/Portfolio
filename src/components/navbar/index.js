import React, {useRef} from 'react';
import './style.css';

const Navbar = (props)=>{
    
    const navBarRef = useRef(null);

    const removeOthers = ()=>{
        var element = document.querySelector('.navitems');
        if(element.classList.contains('navitemsContactMe'))
            document.querySelector('.navitems').classList.remove('navitemsContactMe');
        if(element.classList.contains('navitemsSkills'))
            document.querySelector('.navitems').classList.remove('navitemsSkills');
        if(element.classList.contains('navitemsProjects'))
            document.querySelector('.navitems').classList.remove('navitemsProjects');
        if(element.classList.contains('navitemsEducation'))
            document.querySelector('.navitems').classList.remove('navitemsEducation');
        if(element.classList.contains('navitemsAboutMe'))
            document.querySelector('.navitems').classList.remove('navitemsAboutMe');
    }

    window.addEventListener('scroll', ()=>{
        if(window.scrollY>=props.contactMeRef.current.offsetTop-10){
            document.querySelector('.navbar').style.background="rgb(0, 0, 0)";
            document.querySelector('.navitems').style.color="rgb(215, 215, 215)";
            document.querySelector('.navitems').style.background="rgba(0, 0, 0, 0.7)";
            removeOthers();
            document.querySelector('.navitems').classList.add('navitemsContactMe');
        }
        else if(window.scrollY>=props.skillsRef.current.offsetTop-10){
            document.querySelector('.navbar').style.background="rgb(5, 134, 255)";
            document.querySelector('.navitems').style.color="rgb(225, 225, 225)";
            document.querySelector('.navitems').style.background="rgba(5, 134, 255, 0.7)";
            removeOthers();
            document.querySelector('.navitems').classList.add('navitemsSkills');
        }
        else if(window.scrollY>=props.projectsRef.current.offsetTop-10){
            document.querySelector('.navbar').style.background="rgb(172, 80, 80)";
            document.querySelector('.navitems').style.color="rgb(219, 219, 219)";
            document.querySelector('.navitems').style.background="rgba(172, 80, 80, 0.7)";
            removeOthers();
            document.querySelector('.navitems').classList.add('navitemsProjects');
        }
        else if(window.scrollY>=props.educationRef.current.offsetTop-10){
            document.querySelector('.navbar').style.background="rgb(17, 81, 155)";
            document.querySelector('.navitems').style.color="rgb(255, 255, 255)";
            document.querySelector('.navitems').style.background="rgba(17, 81, 155, 0.7)";
            removeOthers();
            document.querySelector('.navitems').classList.add('navitemsEducation');
        }
        else{
            document.querySelector('.navbar').style.background="#132c33";
            document.querySelector('.navitems').style.color="rgb(212, 236, 162)";
            document.querySelector('.navitems').style.background="rgba(19, 44, 51, 0.7)";
            removeOthers();
            document.querySelector('.navitems').classList.add('navitemsAboutMe');
        }
    });

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
        <div className="navbar stick" ref={navBarRef}>
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