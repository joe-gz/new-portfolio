import React from 'react';
import ProfileImage from '../ProfileImage.js';

function AboutMe(props) {
  return (
    <div className='about__wrapper section-container'>
      <h1 className='about__header' id='aboutMeAnchor'>About Me</h1>
      <div className='about'>
        <div className='about-text__container'>
          <p>
            Originally from Brooklyn, NY, I've been living in Washington, DC for 9+ years, with a stop in Minnesota in between those for college, and a couple years after.
            After a couple jobs as a data analyst, I found my passion in software engineering and made the full career switch.</p>
          <p>
            What started with coding "homework" assignments from my best friend, and 6 months at General Assembly as a student and instructor, I am now a Senior Software Engineer at CAVA.
            Thinking about all I've learned along the way, and more importantly, how much more there is to learn, makes me super excited to keep pushing forward.
          </p>
          <p>
            When I'm not working on improving my development skills, I'm either running around outside, or ideally (pre-covid), traveling to a new country.
            I've hit six out of the seven continents, and 34 countries total.
          </p>
          <p>Some of the technologies I've been using and having fun with recently:</p>
          <ul className='about__list'>
            <li>JavaScript (ES6+)</li>
            <li>Elixir</li>
            <li>React Native</li>
            <li>Phoenix</li>
            <li>React</li>
            <li>AWS</li>
          </ul>
        </div>
        <ProfileImage />
      </div>
    </div>
  );
};

export default AboutMe;
