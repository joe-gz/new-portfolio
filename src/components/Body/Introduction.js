import React from 'react';
import Button from '../Button.js';

function Introduction(props) {
  return (
    <div className='introduction section-container' id='introAnchor'>
      <div className='max-width align-center'>
        <div className='introduction__container'>
          <h1 className='introduction__intro'>Hi, my name is</h1>
          <h1 className='introduction__header'>Joe Glatman Zaretsky</h1>
          <h1 className='introduction__header introduction__special'>I'm a Senior Software Engineer</h1>
          <p className='introduction__text'>
            I'm currently working as a Senior Software Engineer at CAVA.
            At the moment I work primarily with React Native, React, and Elixir, but I have experience with many technologies.
          </p>

          <Button
            link={'mailto:Jglatmanzaretsky@gmail.com'}
            text={'Contact Me'}
            customClasses={'introduction__button'}
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
