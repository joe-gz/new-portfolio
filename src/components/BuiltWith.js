import React from 'react';

function BuiltWith(props) {
  return (
    <ul className = 'built-with__list'>
      {props.builtWith.map(value => {
        return (
          <li key={value}>{value}</li>
        )
      })}
    </ul>
  );
};

export default BuiltWith;
