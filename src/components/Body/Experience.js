import React, { Component } from 'react';

class Experience extends Component {
  render() {
    return (
      <div>
        <span className="anchor" id="experienceAnchor"></span>
        <div className="experience">
          <h2 className = "skills">Skills</h2>
          <p className='skills-paragraph'>JavaScript | React | jQuery | Angular | HTML5 | CSS | AJAX | JSON | D3.js | Ruby | Rails | Sinatra | API Integration | Bootstrap</p>
          <p className='skills-paragraph'>R Shiny | AWS | PostgreSQL | MYSQL | Microsoft Access | RSpec | Git | GitHub | Heroku | Command Line</p>
          <h2 className = "prior-head">Experience</h2>
          <div className = "prior">
            <p>As an Application Developer at Blue Raster, I work on many different projects, using a host of technologies. Whether integrating the Esri JS API into a React app, or creating an R Shiny Application that analyzes sound waves, I am proving my abilities to learn on the fly and provide excellent end product.</p>
            <p>Prior to this, I graduated from the General Assembly Web Development Immersive course in DC, after which I was hired as a Developer in Residence. In this position, I led and planned lessons for the new Web Development Immersive course! This gave me an added opportunity to both improve my development skills, and simultaeneously strengthen my leadership and communication.</p>
            {/* <p>Prior to General Assembly, I was a Senior Analyst on the Strategy and Operations team at The Advisory Board Company. I was responsible for analytics and goal setting for the performance of the account management team, as well as Salesforce.com support.  Through my position, I was able to work on long-term projects directed at diagnosing changes in product sales, and the "health" of memberships with hospitals and universities.</p> */}
          </div>
        </div>
      </div>
      );
  }
}

export default Experience;