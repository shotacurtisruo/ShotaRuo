import React from 'react';
import '../App.css';
import '../styles/header.css';


export const Header = () => {
    return (
        <header>
            
            <h1 className="header-title">Welcome to my website!</h1>
            <nav>
                
                <a href="#home">Home</a>
                <a href="#myprojects">My Projects</a>
                <a href="#aboutme">About Me</a>
               
            </nav>
        </header>
    );
};
