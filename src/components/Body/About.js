import React, { Component } from 'react';
import profilePic from '../../images/profile.jpg';

class About extends Component {
  render() {
    return (
      <div>
        <span className='anchor' id='aboutMeAnchor'></span>
        <div className='about-me section-container'>
          <div className='max-width align-center'>
            <img className='about-me-pic' src={profilePic} alt='about' />
            <div className='about-text-container'>
              <h1 className='about-me-header'>Hi! I'm Joe Glatman Zaretsky</h1>
              <h2 className='about-me-header'>I am a full stack Web Developer</h2>
              <p>
                I'm currently working as an Application Developer at Blue Raster.
                At the moment I work primarily with React, but I have experience with many technologies. Keep scrolling to find out more!
              </p>
              <p>
                When I'm not working on improving my development skills, I'm either running around outside, or ideally traveling to a new country.
                I've hit six out of the seven continents, and 34 countries total; definitely a bit of an obsession!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
