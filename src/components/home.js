import React, { useState, useEffect } from 'react';
import * as THREE from 'three'; // Import Three.js (required by Vanta.js)
import BIRDS from 'vanta/dist/vanta.birds.min'; // Import Vanta Birds effect
import '../App.css';
import '../styles/home.css';
import axios from 'axios';

// Ensure THREE is globally available for Vanta.js
if (!window.THREE) {
    window.THREE = THREE;
}

export const Home = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

   
    const text = "Hello. I am a Software Developer.";
    const wrappedText = text.split(' ').map((word, index) => (
        <span key={index} className="word">
            {word}&nbsp;
        </span>
    ));

    const mainText = "I am Shota Ruo";
    const mainWrappedText = mainText.split(' ').map((word, index) => (
        <span key={index} className="wordMain">
            {word}&nbsp;
        </span>
    ));

 

    return (
        <div className="home-container">
            <h2 id="homePageText">{mainWrappedText}</h2>
            <div className="home-container2">
                <div className="home-container2-1">
                    <p id="webDevText">{wrappedText}</p>
                </div>
                <div className="home-container2-2">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img
                                    src="images/ShotaRuoMAIN.JPG"
                                    width={300}
                                    height={300}
                                    id="self-portrait"
                                    alt="self portrait"
                                ></img>
                            </div>
                            <div className="flip-card-back">
                                <p id="hobbies">About Me:</p>
                                <ul>
                                    <li>I am a third year studying CS @ UC Davis</li>
                                    <li>On my free time, I like to play basketball or learn new technologies</li>
                                    <li>Please feel free to connect with me on my socials! They are all at the bottom</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};