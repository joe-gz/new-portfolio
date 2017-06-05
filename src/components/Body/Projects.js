import React, { Component } from 'react';
import SecondaryProject from './OtherProjects';
import {spotlight, projectArray} from '../../config';
import image from '../../images/3dates.jpg'
import secondImage from '../../images/baseballLeague2.png';
import thirdImage from '../../images/beerLogger2.png';

class Portfolio extends Component {

  createSecondaryProject = () => {
    const secondaryProjectArray = [];
    let image;
    projectArray.forEach((project, i) => {
      if (i === 0) {
        image = secondImage;
      } else {
        image = thirdImage
      }
      console.log(project);
      secondaryProjectArray.push(
        <SecondaryProject key={project.title} link={project.link} image={image} title={project.title} description={project.description} />
      )
    });
    console.log(secondaryProjectArray);
    return secondaryProjectArray;
  }

  render() {
    const secondaryProjectArray = this.createSecondaryProject();
    return (
      <div>
        <span className='anchor' id='portfolioAnchor'></span>
        <div className='portfolio'>
          <h1>Some of my work!</h1>
          <div className='main-project'>
            <div className='main-project-image-container'>
              <img className='main-portfolio-image' src={image} alt='spotlight' />
            </div>
            <div className='project-text-container'>
              <h2 className = 'project-title'>{spotlight.title}</h2>
              <p className = 'main-project-paragraph'>{spotlight.description}</p>
              <a className='main-project-button' href={spotlight.link}>
                Check it out
              </a>
            </div>
          </div>
          <div className = 'row second-projects'>
            {secondaryProjectArray}
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
