import React from 'react';
import styles from '../styles/myProjects.css'

export const MyProjects = () => {
    return (
        <div id='main'>
            <h1 style={{color: 'black'}}>My Projects:</h1>
                <p>Here are the list of projects I have done or am currently working
                on:
                </p>
            <h3>Link to my Github:</h3>
            <a href='https://github.com/shotacurtisruo?tab=repositories' target="_blank" rel="noopener noreferr">(Click to View)</a>

            <h3>Web Chrome Extension</h3>
            <p>Chrome web extension that allows users to save and store links and tabs directly on their computer, providing a convenient way to manage and access their browsing sessions.
You can install the files, unzip them, and add install to your Chrome extensions (must enable developer mode).</p>
            <a href='https://github.com/shotacurtisruo/chrome-web-browser-version-1.1' target='_blank' rel='noopener noreferr'>Source Code on Github:</a>

            <h3>Shoota-Hoops</h3>
            <p>Website for a small basketball clinic I hosted during the summer. Focus on styling: bento grids and glows.</p>
            <a href='https://shoota-hoops.web.app/' target='_blank' rel='noopener noreferr'>Shoota-Hoops Main Website</a>

            <h3>PokeSaver</h3>
            <p>Still in progress: Create a  webpage where users can search their pokemon and learn about their stats and descrription. Will allow the user to favorite a pokemon that will save a sprite of the pokemon in a visiblepokemon box, that they will be able to manage and play with. Will extract data from online pokemon API.</p>

            <h3>Former member at #INCLUDE</h3>     
            <a href='https://includedavis.com/' target="_blank" rel='noopener noreferr'>#INCLUDE Homepage (Click to View)</a> 
        </div>
        
    )
}
