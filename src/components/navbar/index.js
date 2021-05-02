import React from 'react';
import './style.css';

const Navbar = (props)=>{

    window.addEventListener('scroll', ()=>{
        console.log('here');
        var navbar = document.querySelector('.navbar');
        if(window.pageYOffset>=navbar.clientTop)
            navbar.classList.add("stick");
        else
            navbar.classList.remove("stick");
    });

    return(
        <>
        <div className="navbar">
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
            <div className="burger">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        </>
    );
}

export default Navbar;