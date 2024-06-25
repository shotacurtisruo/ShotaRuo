import React from 'react';
import styles from '../styles/myProjects.css'

export const MyProjects = () => {
    return (
        <div id='main'>
            <h1 style={{color: 'black'}}>My Projects:</h1>
                <p>Here are the list of projects I have done or am currently working
                on:
                </p>
            <h2>Link to my Github:</h2>
            <a href='https://github.com/shotacurtisruo?tab=repositories' target="_blank" rel="noopener noreferr">(Click to View)</a>

            <h3>Former member at #INCLUDE</h3>     
            <a href='https://includedavis.com/' target="_blank" rel='noopener noreferr'>#INCLUDE Homepage (Click to View)</a> 
        </div>
        
    )
}
