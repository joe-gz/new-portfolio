import React from 'react';
import BuiltWith from '../BuiltWith.js';

function SecondaryProject(props) {
  return (
    <div className = 'project-card'>
      <div className='project-text-wrapper'>
        <a href={props.link} target='_blank' rel='noopener noreferrer'>
          <h2 className = 'project-title-other'>{props.title}</h2>
        </a>
        <p className = 'project-paragraph'>{props.description}</p>
        <BuiltWith builtWith={props.builtWith} />
      </div>
      <div className='project-image__wrapper'>
        <a href={props.link} target='_blank' rel='noopener noreferrer'>
          <img className='portfolio-image' src={props.image} alt='secondary' />
        </a>
      </div>
    </div>
  );
};

export default SecondaryProject;
