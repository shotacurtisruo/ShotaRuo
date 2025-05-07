
import '../styles/aboutme.css'
import React, { useRef } from 'react';

export const AboutMe = () => {
    const bentoBoxRef = useRef(null);

    const handleMouseMove = (e) => {
        const box = bentoBoxRef.current;
        const rect = box.getBoundingClientRect();
        const x = e.clientX - rect.left; // X position within the box
        const y = e.clientY - rect.top;  // Y position within the box
        
        box.style.setProperty('--mouse-x', `${x}px`);
        box.style.setProperty('--mouse-y', `${y}px`);
    };
       return (
        <div id='main'>
            <div className='bento-box'
            ref={bentoBoxRef}
            onMouseMove={handleMouseMove}>
            <div className="text-section">
                        <h1>Web Developer @ #INCLUDE</h1>
                        <p>
                            I collaborated with a team to develop the front end of a dynamic website, using JavaScript, React.js, HTML, and CSS. I worked closely with the design team to translate their creative concepts into functional, responsive user interfaces, ensuring a seamless user experience. Additionally, I contributed to parts of the backend development, gaining experience in full-stack integration and supporting the overall functionality of the site.
                        </p>
                        <p>under construction yet again - 4/29/25</p>
                    </div>
                    <div className="logo-section">
                        <div className="logo-box">
                            <img src="images/javascript-logo.png" alt="JavaScript Logo" />
                        </div>
                        <div className="logo-box">
                            <img src="images/react-logo.png" alt="React.js Logo" />
                        </div>
                        <div className="logo-box">
                            <img src="images/html-logo.png" alt="HTML Logo" />
                        </div>
                        <div className="logo-box">
                            <img src="images/css-logo.png" alt="CSS Logo" />
                        </div>
                    </div>
        

        </div>
     
        
        

        </div>
    )
}