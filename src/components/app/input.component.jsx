import React from 'react';

const Input = props =>
    <input
        name={props.name}
        id={props.id}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        className={props.className}
     />;

export default Input;
