import React, { useState } from 'react';
import '../App.css';
import '../styles/home.css'
import axios from 'axios';

export const Home = () => {
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

    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:5001/api/submit-email', { email });
            if(response.status === 200) {
                alert('Email submitted successfully');  
                setSubmitted(true);
            }
        } catch (error) {
            console.error('error submitting email', error);
            alert('Failed to submit email');
        }
       
       
    };
       
            





    return (
        <div className="home-container">
            <h2 id='homePageText'>{mainWrappedText}</h2>
            <div className='home-container2'>
                <div className='home-container2-1'>
                    <p id='webDevText'>{wrappedText}</p>
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
                                        <li>I am a third year studying CS @ UC Davis</li>
                                        <li>I have fun creating webpages for non-profits and others.</li>
                                        <li>I am very fond with working with teams and communicating</li>
                                        <li>Some of my other hobbies are Basketball and Chess</li>
                                    </ul>
                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>
           {/* <div className='home-container3'>
                <h3>Contact Me</h3>
                {!submitted ? (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">Submit</button>
                    </form>
                ) : (
                    <p>Thank you for submitting your email!</p> 
                )}
            </div>
            */}
            
        </div>





    );
};
//create button for toggling light and dark mode 
//create a login page with forgot password button and alert the email

//create a form wil users can drop their email if they are interested in sending me emails or 