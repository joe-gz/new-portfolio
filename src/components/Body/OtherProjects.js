import React, { Component } from 'react';

class SecondaryProject extends Component {
  render() {
    return (
      <div className = 'column-3 project-card'>
        <a href={this.props.link}>
        <img className='portfolio-image' src={this.props.image} alt='secondary' />
          <div className='project-text-wrapper'>
            <h2 className = 'project-title-other'>{this.props.title}</h2>
            <p className = 'project-paragraph'>{this.props.description}</p>
          </div>
        </a>
      </div>
    );
  }
}

export default SecondaryProject;
