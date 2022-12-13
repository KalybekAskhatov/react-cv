import React from 'react';
import css from "../assets/icon-css.png"
import html from "../assets/icon-html.png"
import github from "../assets/icon-github.png"
import js from "../assets/icon-javascript.png"
import './MySkills.css'

const MySkills = () => {
    return (
        <div className='main'>
        <h2>My skills</h2>
        <div className="my-skills">          
            <div className="html">
                <img src={html} alt="logo"/>
                <h3>HTML midle 100%</h3>
            </div>
            <div className="css">
                <img src={css} alt="logo"/>
                <h3>CSS midle 100%</h3>
            </div>
            <div className="Git/GitHub">
                <img src={github} alt="logo"/>
                <h3>Git/GitHub junior 100%</h3>
            </div>
            <div className="JavaScript">
                <img src={js} alt="logo"/>
                <h3>JavaScript (Fundamentals) junior 100%</h3>
            </div>
        </div>
        </div>
    );
};

export default MySkills;