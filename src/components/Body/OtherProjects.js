import React, { Component } from 'react';

class SecondaryProject extends Component {
  render() {
    return (
      <div className = 'column-3 project-card'>
        {this.props.title !== 'Soundburst' ?
          <a href={this.props.link} target='_blank'>
          <img className='portfolio-image' src={this.props.image} alt='secondary' />
            <div className='project-text-wrapper'>
              <h2 className = 'project-title-other'>{this.props.title}</h2>
              <p className = 'project-paragraph'>{this.props.description}</p>
            </div>
          </a> :
          <span onClick={this.props.openModal}>
          <img className='portfolio-image' src={this.props.image} alt='secondary' />
            <div className='project-text-wrapper'>
              <h2 className = 'project-title-other'>{this.props.title}</h2>
              <p className = 'project-paragraph'>{this.props.description}</p>
            </div>
          </span>
        }
      </div>
    );
  }
}

export default SecondaryProject;
