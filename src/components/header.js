import React from 'react';
import '../App.css'
import "../styles/header.css"

export const Header = () => {
    return (
        
        <header>
            <h1>Welcome to my website</h1>
            <nav>
                <a href="/#">Home</a>
                <a href="/#">My Projects</a>
                <a href="/#">About Me</a>
            </nav>
        </header>
    )
}