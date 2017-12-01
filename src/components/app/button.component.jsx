import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import className from 'classnames';


const Button = props =>
  (
    <button type="button" type={props.type} disabled={props.hasError} onClick={() => props.onClick()}>Get Token</button>
  );

Button.propType = {
  hasError: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
