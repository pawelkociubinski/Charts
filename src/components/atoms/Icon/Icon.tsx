import React from 'react';
import ICONS from './icons';
import console = require('console');

export default props => (
  <svg
    className={props.className}
    height={props.size}
    viewBox="0 0 32 32"
    width={props.size}
  >
    {ICONS[props.icon].map(d => {
      console.log(props.icon);
      return <path key={d} d={d} />;
    })}
  </svg>
);
