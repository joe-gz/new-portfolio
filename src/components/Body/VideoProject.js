import React, { Component } from 'react';

class VideoProject extends Component {
  render() {
    return (
      <span onClick={this.props.openModal}>
        <img className='portfolio-image' src={this.props.image} alt='secondary' />
        <div className='project-text-wrapper'>
          <h2 className = 'project-title-other'>{this.props.title}</h2>
          <p className = 'project-paragraph'>{this.props.description}</p>
        </div>
      </span>
    );
  }
}

export default VideoProject;
