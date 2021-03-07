import React, { Component } from 'react';

function AboutMe(props) {
  return (
    <div className='introduction section-container'  id='aboutMeAnchor'>
      <div className='max-width align-center'>
        <div className='about-text-container'>
          <p>
            I'm currently working as a Software Engineer at CAVA.
            At the moment I work primarily with React Native, React, and Elixir, but I have experience with many technologies.
          </p>
          <p>
            When I'm not working on improving my development skills, I'm either running around outside, or ideally (pre-covid) traveling to a new country.
            I've hit six out of the seven continents, and 34 countries total.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
