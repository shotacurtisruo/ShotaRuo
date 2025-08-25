import '../styles/experience.css';
import React from 'react';
import Marquee from 'react-fast-marquee'; // Import the library
import { Slide, Fade } from 'react-awesome-reveal'; // Import the Fade animation

export const Experience = () => {
    return (
        <div id="main">
            {/* Header Section */}
            <div className="experience-header">
                <h1>Experience</h1>
            </div>

            {/* Bento Box: Project Lead @ Narb */}
            <Slide direction="left" duration={3700}>
                <div className="bento-box">
                    <div className="inner-box">
                        {/* Left Section: Job Position */}
                        <div className="job-details">
                            <h1>Project Lead @ Narb</h1>
                            <p>Duration: August 2025 - Present</p>
                            <p>Responsibilities: Responsible for overseeing the planning, execution, and continuous improvement of the company website</p>
                        </div>
                        {/* Right Section: Company Logo */}
                        <div className="company-logo">
                            <img src="/images/narblogo.png" alt="Narb logo" />
                        </div>
                    </div>
                </div>
            </Slide>

            {/* Bento Box: Front-end developer intern @ Pal AI */}
            <Slide direction="right" duration={3700}>
                <div className="bento-box">
                    <div className="inner-box">
                        {/* Left Section: Job Position */}
                        <div className="job-details">
                            <h1>Front-end developer intern @ Pal AI</h1>
                            <p>Duration: August 2025 - Present</p>
                            <p>Responsibilities: Working on a startup webapp</p>
                        </div>
                        {/* Right Section: Company Logo */}
                        <div className="company-logo">
                            <img src="/images/PalAI.jpeg" alt="Pal AI logo" />
                        </div>
                    </div>
                </div>
            </Slide>

            {/* Bento Box: Software Engineering Intern @ Narb (Updated) */}
            <Slide direction="right" duration={3700}>
                <div className="bento-box">
                    <div className="inner-box">
                        {/* Left Section: Job Position */}
                        <div className="job-details">
                            <h1>Software Engineering Intern @ Narb</h1>
                            <p>Duration: June 2025 - August 2025</p>
                            <p>Responsibilities: Working on new upcoming tech products</p>
                        </div>
                        {/* Right Section: Company Logo */}
                        <div className="company-logo">
                            <img src="/images/narblogo.png" alt="Narb logo" />
                        </div>
                    </div>
                </div>
            </Slide>

            {/* Bento Box Section 1 */}
            <Slide direction="left" duration={3700}>
                <div className="bento-box">
                    <div className="inner-box">
                        {/* Left Section: Job Position */}
                        <div className="job-details">
                            <h1>Software Developer at #include</h1>
                            <p>Duration: Jan 2023 - June 2023</p>
                            <p>Responsibilities: Developed scalable web applications...</p>
                        </div>

                        {/* Right Section: Company Logo */}
                        <div className="company-logo">
                            <img src="/images/include.png" alt="#include-logo" />
                        </div>
                    </div>
                </div>
            </Slide>

            {/* Bento Box Section 2 */}
            <Slide direction="right" duration={3700}>
                <div className="bento-box">
                    <div className="inner-box">
                        {/* Left Section: Job Position */}
                        <div className="job-details">
                            <h1>Computer Technician @ UCD SOEIT</h1>
                            <p>Duration: January 2025 - Present</p>
                            <p>Responsibilities: Assisted in tier 1 tech support, hardware management and client support</p>
                        </div>

                        {/* Right Section: Company Logo */}
                        <div className="company-logo">
                            <img src="/images/ucdavis.png" alt="TechCorp-logo" />
                        </div>
                    </div>
                </div>
            </Slide>

            {/* Bento Box Section 3 */}
            <Slide direction="left" duration={3700}>
                <div className="bento-box">
                    <div className="inner-box">
                        {/* Left Section: Job Position */}
                        <div className="job-details">
                            <h1>Website Manager @ Kefli Sports Club</h1>
                            <p>Duration: September 2024 - present</p>
                            <p>Responsibilities: Developed/maintain club website.</p>
                        </div>

                        {/* Right Section: Company Logo */}
                        <div className="company-logo">
                            <img src="/images/KSC.png" alt="DevStudio-logo" />
                        </div>
                    </div>
                </div>
            </Slide>

            {/* Bento Box Section 4 */}
            <Slide direction="right" duration={3700}>
                <div className="bento-box">
                    <div className="inner-box">
                        {/* Left Section: Job Position */}
                        <div className="job-details">
                            <h1>Student Helper @ CPE IT</h1>
                            <p>Duration: May 2025 - Present</p>
                            <p>Responsibilities: staffing the help desk, providing tier 1 computer support, moving computers, performing computer updates, and finding solutions to novel problems</p>
                        </div>

                        {/* Right Section: Company Logo */}
                        <div className="company-logo">
                            <img src="/images/ucdavis.png" alt="TechCorp-logo" />
                        </div>
                    </div>
                </div>
            </Slide>

            {/* Bento Box Section 5 */}
            <Slide direction="left" duration={3700}>
                <div className="bento-box">
                    <div className="inner-box">
                        {/* Left Section: Job Position */}
                        <div className="job-details">
                            <h1>Fullstack Developer @ Buzzit</h1>
                            <p>Duration: May 2025 - Present</p>
                            <p>Responsibilities: Creating an app using React Native!</p>
                        </div>

                        {/* Right Section: Company Logo */}
                        <div className="company-logo">
                            <img src="/images/buzzit.jpeg" alt="buzzit-logo" />
                        </div>
                    </div>
                </div>
            </Slide>

            {/* Horizontal Reel Section */}
            <Fade duration={2000}> {/* Add fade-in animation */}
                <h2 className="tech-stack-heading">My Tech Stack</h2>
                <div className="tech-stack-container">
                    <div className="tech-stack-reel">
                        <Marquee gradient={false} speed={70} loop={0}>
                            <div className="tech-stack">
                                {/* First set of icons */}
                                <img src="/images/html5.svg" alt="HTML" />
                                <img src="/images/css.svg" alt="CSS" />
                                <img src="/images/javascript.svg" alt="JavaScript" />
                                <img src="/images/python.svg" alt="Python" />
                                <img src="/images/firebase.svg" alt="Firebase" />
                                <img src="/images/c.svg" alt="C" />
                                <img src="/images/cplusplus.svg" alt="C++" />
                                <img src="/images/react.svg" alt="ReactJS" />
                                <img src="/images/supabase.svg" alt="Supabase" />
                                <img src="/images/expo.svg" alt="ExpressJS" />

                                {/* Second set of icons */}
                                <img src="/images/html5.svg" alt="HTML" />
                                <img src="/images/css.svg" alt="CSS" />
                                <img src="/images/javascript.svg" alt="JavaScript" />
                                <img src="/images/python.svg" alt="Python" />
                                <img src="/images/firebase.svg" alt="Firebase" />
                                <img src="/images/c.svg" alt="C" />
                                <img src="/images/cplusplus.svg" alt="C++" />
                                <img src="/images/react.svg" alt="ReactJS" />
                                <img src="/images/supabase.svg" alt="Supabase" />
                                <img src="/images/expo.svg" alt="ExpressJS" />

                                {/* Spacer */}
                                <div className="spacer"></div>
                            </div>
                        </Marquee>
                    </div>
                </div>
            </Fade>
        </div>
    );
};