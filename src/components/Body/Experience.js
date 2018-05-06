import React, { Component } from 'react';

class Experience extends Component {
  render() {
    return (
      <div>
        <span className='anchor' id='experienceAnchor'></span>
        <div className='experience section-container'>
          <div className='max-width'>
            <h2 className = 'skills'>Skills</h2>
            <p className='skills-paragraph'>JavaScript | React | React Native | jQuery | Angular | HTML5 | CSS | AJAX | JSON | D3.js | Ruby | Rails </p>
            <p className='skills-paragraph'>Firebase | Node | R Shiny | AWS | PostgreSQL | MYSQL | Microsoft Access | Git | GitHub | Heroku</p>
            <h2 className = 'prior-head'>Experience</h2>
            <div className = 'prior'>
              <p>As an Application Developer at Blue Raster, I work on many different projects, using a host of technologies. Whether integrating the Esri JS API into a React app, or creating an R Shiny Application that analyzes sound waves, I am proving my abilities to learn on the fly and provide excellent end product.</p>
              <p>Prior to this, I graduated from the General Assembly Web Development Immersive course in DC, after which I was hired as a Developer in Residence. In this position, I led and planned lessons for the new Web Development Immersive course! This gave me an added opportunity to both improve my development skills, and simultaeneously strengthen my leadership and communication.</p>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

export default Experience;
