import React, { Component } from 'react';
import SecondaryProject from './SecondaryProject';
import Button from '../Button.js';
import {spotlight, projectArray} from '../../config';

class Portfolio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  createSecondaryProject = () => {
    const secondaryProjectArray = [];
    projectArray.forEach((project, i) => {
      secondaryProjectArray.push(
        <SecondaryProject
          key={project.title}
          link={project.link}
          image={project.image}
          title={project.title}
          description={project.description}
          openModal={this.openModal}
        />
      );
    });

    return secondaryProjectArray;
  }

  closeModal = () => {
    this.setState({
      modalVisible: false
    });
  }

  openModal = () => {
    this.setState({
      modalVisible: true
    });
  }

  render() {
    const secondaryProjectArray = this.createSecondaryProject();
    return (
      <div className='portfolio section-container'>
        <div className='max-width'>
          <h1 className='project-header' id='portfolioAnchor'>See My Work</h1>
          <div className='main-project'>
            <div className='project-text-container'>
              <h2 className = 'project-title'><span className='feature-project-container'>Feature Project - </span>{spotlight.title}</h2>
              <p className = 'main-project-paragraph'>{spotlight.description}</p>
              <Button
                link={spotlight.link}
                text={'Check it out'}
              />
            </div>
            <div className='main-project-image-container'>
              <img className='main-portfolio-image' src={spotlight.image} alt='spotlight' />
            </div>
          </div>
          <h2 className='other-header'>Some other cool projects</h2>
          <div className = 'second-projects'>
            {secondaryProjectArray}
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
