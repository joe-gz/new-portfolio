import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="headerNav">
          <div className="header-name">Joe <span className='header-last-name'>G</span><span className='header-last-name'>Z</span></div>
          <div className="nav-links">
            <div className="links"><a href="#aboutMeAnchor" title="About">About Me</a></div>
            <div className="links"><a href="#portfolioAnchor" title="portfolio">Work</a></div>
            <div className="links"><a href="#experienceAnchor" title= "Experience">Skills</a></div>
            <div className="links"><a href="#contactAnchor" title="Contact">Contact Me</a></div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
