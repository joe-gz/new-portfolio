import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <span className='anchor' id='contactAnchor'></span>
        <div className='contact'>
          <h1>
            Contact Information
          </h1>
          <div>
            Joe Glatman Zaretsky
          </div>
          <div className='contact-link-container'>
            <a href='mailto:Jglatmanzaretsky@gmail.com'>
              <div className='contact-link email-icon'></div>
            </a>
            <a href='https://www.linkedin.com/pub/joseph-glatman-zaretsky/10/1/a29' title='linkedIn'>
              <div className='contact-link linkedin-icon'></div>
            </a>
            <a href='https://www.facebook.com/joe.zaretsky' title='facebook'>
              <div className='contact-link facebook-icon'></div>
            </a>
            <a className = 'blog' href='https://joegz.wordpress.com/' title='blog'>
              <div className='contact-link blog-link'>
                Blog
              </div>
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
