import React, { useEffect } from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min'; // Import Vanta Birds effect
import '../styles/TDdesign.css';

export const TDdesign = () => {
    useEffect(() => {
        let vantaEffect;

        // Initialize Vanta Birds effect
        vantaEffect = BIRDS({
            el: document.querySelector('.td-design-container'), // Apply the effect directly to the element
            mouseControls: true, // Enable mouse controls
            touchControls: true, // Enable touch controls
            gyroControls: false, // Disable gyro controls
            minHeight: 200.0, // Minimum height
            minWidth: 200.0, // Minimum width
            scale: 1.0, // Scale factor
            scaleMobile: 1.0, // Scale factor for mobile devices
            backgroundColor: 0x0f0f0f, // Optional: Set background color
        });

        // Cleanup the effect on unmount
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, []);

    return (
        <div className="td-design-container">
            <h1 style={{ color: 'white' }}>Heading</h1>
        </div>
    );
};