import React, { Component } from 'react';

function SecondaryProject(props) {
  return (
    <div className = 'column-3 project-card'>
      <a href={props.link} target='_blank' rel='noopener noreferrer'>
      <img className='portfolio-image' src={props.image} alt='secondary' />
        <div className='project-text-wrapper'>
          <h2 className = 'project-title-other'>{props.title}</h2>
          <p className = 'project-paragraph'>{props.description}</p>
        </div>
      </a>
    </div>
  );
};

export default SecondaryProject;
