import React from 'react';
import '../styles/aboutme.css'


export const AboutMe = () => {
    return (
        <div id='main'>
            
            <h1>About Me</h1>
            <p>I am currently a second year studying statistics on the data science
                <br></br>track
                at
                UC Davis. During my free time, I have been<br></br>
                learning web development to expand
                my skill set and pursue <br></br>
                new opportunities in the tech industry.

            </p>
            <h2>Experience</h2>
            <p>I started coding during the summer of 2023.
                I decided to start off by taking the CS50 online course that was offered 
                by Harvard.<br></br> From this course I learned how to program in C and also 
                develop critical thinking / problem-solving skills.
                <br></br> I also learned how to use HTML and CSS through an online course from Codeacademy.
                <br></br> I have learned to use many platforms and other languages through classes that were offered in my high school and mainly from the courses 
                <br></br> I take now at UC Davis.

            </p>
            <h2>Skills</h2>
            <div className='skillList'>
            
            <li>Front-end development</li>
            <li>CSS (cascading style sheets)</li>
            <li>HTML</li>
            <li>C</li>
            <li>Python</li>
            <li>Javascript</li>
            <li>MATLAB</li>
            <li>Rstudio</li>
            <li>Javascript</li>
            </div>

        </div>

    )
}