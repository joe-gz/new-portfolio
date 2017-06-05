import React, { Component } from 'react';
import profilePic from '../../images/profile.jpg';

class About extends Component {
  render() {
    return (
      <div>
        <span className='anchor' id='aboutMeAnchor'></span>
        <div className='about-me'>
          <img className='about-me-pic' src={profilePic} alt='about' />
          <p>
            Hi, I'm Joe! I am a full stack Web Developer currently working as an Application Developer at Blue Raster.
            At the moment I'm working primarily with React, but I have experience with a range of technologies.
          </p>
          <p>
            When not working on improving my development skills, I am either running around outside, or ideally traveling to a new country.
            I've hit six out of the seven continents, and 34 countries total; definitely a bit of an obsession!
          </p>
        </div>
      </div>
    );
  }
}

export default About;
