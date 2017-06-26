import React, { Component } from 'react';
import SecondaryProject from './OtherProjects';
import {spotlight, projectArray} from '../../config';

class Portfolio extends Component {

  createSecondaryProject = () => {
    const secondaryProjectArray = [];
    let image;
    projectArray.forEach((project, i) => {
      secondaryProjectArray.push(
        <SecondaryProject key={project.title} link={project.link} image={project.image} title={project.title} description={project.description} />
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
        <div className='portfolio section-container'>
          <div className='max-width'>
            <h1 className='project-header'>See My Work</h1>
            <div className='main-project'>
              <div className='main-project-image-container'>
                <img className='main-portfolio-image' src={spotlight.image} alt='spotlight' />
              </div>
              <div className='project-text-container'>
                <h2 className = 'project-title'><span className='feature-project-container'>Feature Project - </span>{spotlight.title}</h2>
                <p className = 'main-project-paragraph'>{spotlight.description}</p>
                <a className='main-project-button' href={spotlight.link}>
                  Check it out
                </a>
              </div>
            </div>
            <h2 className='other-header'>Some other cool projects</h2>
            <div className = 'flex-row second-projects'>
              {secondaryProjectArray}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
