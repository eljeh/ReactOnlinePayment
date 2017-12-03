import React from 'react';

const Label = props =>
  <label htmlFor={props.htmlFor} className={props.className}>
    {props.text}
  </label>;

export default Label;
