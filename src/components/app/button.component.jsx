import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Button = props =>
  (
    <button type="button" disabled={props.hasError} onClick={() => props.onClick()}>Get Token</button>
    // <button id={props.id} type={props.type} className={props.className}>{props.text}</button>
  );

Button.propType = {
  hasError: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
