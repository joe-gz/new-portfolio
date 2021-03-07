import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='contact section-container'  id='contactAnchor'>
          <h1 className='footer__header'>
            Contact Information
          </h1>
          <div>
            Joe Glatman Zaretsky
          </div>
          <div className='contact-link-container'>
            <a href='mailto:Jglatmanzaretsky@gmail.com'>
              <div className='contact-link email-icon'></div>
            </a>
            <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/joe-glatman-zaretsky-a2900110/' title='linkedIn'>
              <div className='contact-link linkedin-icon'></div>
            </a>
            <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/joe.zaretsky' title='facebook'>
              <div className='contact-link facebook-icon'></div>
            </a>
            <a target="_blank" rel="noopener noreferrer" href='https://twitter.com/therealJGZ' title='twitter'>
              <div className='contact-link twitter-icon'></div>
            </a>
          </div>
          <div>
            (347) 256-7665
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
