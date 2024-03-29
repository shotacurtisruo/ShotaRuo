import React from 'react';
import '../App.css'
import { useState } from 'react';

export const Home = () => {
    const [clicked, setClicked] = useState(0);
    const [inputBox, setInputBox] = useState('');
    const [display, setDisplay] = useState('');

    function handleClick() {
        setClicked(clicked + 1)
    }

    function handleTyping(event) {
        setInputBox(event.target.value)
    }

    function displayParagraph() {
        setDisplay(inputBox)
    }
    function sayHello() {
        alert('Hello my name is Shota Ruo.');
    }
    

    return (
        <div>
            <h1 className='black'>Home</h1>
            {/* <p>This is the number of times clicked: {clicked}.</p>
    <button onClick={handleClick}>click me!</button> */}

            <p>{display}</p>
            <input value={inputBox} onChange={handleTyping} />
            <button onClick={displayParagraph}>submit form</button>
            <button onClick={sayHello}>Say Hello</button>
        </div>
    )
}