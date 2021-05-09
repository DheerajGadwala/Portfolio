import React from 'react';
import './style.css';

const Navbar = (props)=>{

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
                <li>About Me</li>
                <li>Education</li>
                <li>Projects</li>
                <li>Skills</li>
                <li>Contact</li>
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