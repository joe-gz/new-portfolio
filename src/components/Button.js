import React from 'react';

function Button(props) {
  return (
    <a href={props.link}>
      <button className={`main-project-button ${props.customClasses}`}>
        {props.text}
      </button>
    </a>
  );
};

export default Button;
