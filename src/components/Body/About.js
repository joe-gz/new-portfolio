import React, { Component } from 'react';
import profilePic from '../../images/profile.jpg';

class About extends Component {
  render() {
    return (
      <div>
        <span className='anchor' id='aboutMeAnchor'></span>
        <div className='about-me section-container'>
          <div className='max-width align-center'>
            <span className='about-me-pic-container'>
              <img className='about-me-pic' src={profilePic} alt='about' />
            </span>
            <div className='about-text-container'>
              <h1 className='about-me-header'>Hi! I'm Joe Glatman Zaretsky</h1>
              <h2 className='about-me-header'>I am a full stack Web Developer</h2>
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
      </div>
    );
  }
}

export default About;
