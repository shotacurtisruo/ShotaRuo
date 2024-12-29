import React, { useState } from 'react';
import '../App.css';
import '../styles/home.css'

export const Home = () => {





    return (
        <div className="home-container">
            <h2 id='homePageText'>I am  Shota Ruo</h2>
            <div className='home-container2'>
                <div className='home-container2-1'>
                    <p id='webDevText'>Hello. I am a software developer.</p>
                </div>
                <div className='home-container2-2'>
                    <div className='flip-card'>
                        <div className='flip-card-inner'>
                            <div className='flip-card-front'>
                                <img src="images/ShotaRuoMAIN.JPG" width={300} height={300} id='self-portrait' alt="self portrait"></img>
                            </div>

                            <div className='flip-card-back'>

                                <p id='hobbies'>About Me:</p>
                                    <ul>
                                        <li>Currently at UC Davis studying Computer Science</li>
                                        <li>I have fun creating webpages for non-profits and others.</li>
                                        <li>I am very fond with working with teams and communicating</li>
                                        <li>Some of my other hobbies are Basketball and Chess</li>
                                    </ul>
                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p id="replacement-text">(replacement text fill below in column type text)</p>
        </div>





    );
};
//create button for toggling light and dark mode 
//create a login page with forgot password button and alert the email