import React from 'react';
import "./HomePage.css"
import ttt from "../assets/20150507_122952.jpg"

const HomePage = () => {
    return (
        <div className="main">
      <div className="about" id="about">
        <div className="about__about-me">
            <h1>Kalybek Askhatov</h1>
            <p>Proactive person with a University degree in Finances, but very interested in IT. I have excellent written, verbal, analytical and interpersonal skills. Hoping to develop my knowledges in IT and gain new experience in it.</p>
        </div>
        <div className="about__img" >
            <img src={ttt} alt="logo"/>
        </div>
      </div>
        </div>
    );
};

export default HomePage;