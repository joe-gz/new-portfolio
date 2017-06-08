import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="headerNav">
          <ul>
            <li className="header-name">Joe <span className='header-last-name'>G</span><span className='header-last-name'>Z</span></li>
            <span className="nav-links">
              <li className="links"><a href="#aboutMeAnchor" title="About">About Me</a></li>
              <li className="links"><a href="#portfolioAnchor" title="portfolio">Portfolio</a></li>
              <li className="links"><a href="#experienceAnchor" title= "Experience">Experience</a></li>
              <li className="links"><a href="#contactAnchor" title="Contact">Contact Me</a></li>
            </span>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
