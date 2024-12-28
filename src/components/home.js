import React, { useState } from 'react';
import '../App.css';
import '../styles/home.css'

export const Home = () => {
    const [backgroundColor, setBackgroundColor] = useState('#eee8aa'); // Initial background color
    

    // function to generate a random color every time I click on button//useState
    const generateRandomColor = () => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); // generating a random hex color creates a
        //random number for it
        setBackgroundColor(randomColor);
    };

    return (
        <div className="home-container" style={{backgroundColor}}>
            <h2 id='homePageText'>I am Shota Ruo</h2>
            <div className ='home-container2'>
            <p id='webDevText'>Hello. This is Shota; an aspiring web developer.</p>
            
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
            <p>(replacement text fill below in column type text)</p>

            
            
            
        </div>
    );
};
//create button for toggling light and dark mode 
//create a login page with forgot password button and alert the email