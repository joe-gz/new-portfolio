import React, { Component } from 'react';
import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolledToTop: true
    };
  }

  componentDidMount() {
    $('a').smoothScroll();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrolledToTop = window.pageYOffset < 25;
    if (scrolledToTop && !this.state.scrolledToTop) {
      this.setState({scrolledToTop: true});
    } else if (!scrolledToTop && this.state.scrolledToTop) {
      this.setState({scrolledToTop: false});
    }
  }

  render() {
    const scrolledToTop = this.state.scrolledToTop;
    return (
      <nav>
        <div className={`headerNav ${scrolledToTop ? '' : 'headerNav__scrolled'}`}>
          <div className="header-name">Joe <span className='header-last-name'>G</span><span className='header-last-name'>Z</span></div>
          <div className="nav-links">
            <div className="links"><a href="#introAnchor" title="About">About Me</a></div>
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
