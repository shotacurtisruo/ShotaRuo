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

                                <p id='hobbies'>Hobbies I have aside from coding and academics:
                                    <li>Walking my dog</li>
                                    <li>Playing basketball with friends</li>
                                    <li>Going to the gym and working out</li>
                                    <li>Exploring outside and going on hikes</li>
                                </p>

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