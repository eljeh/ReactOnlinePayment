import React from 'react';
import styles from './app.label.scss';

const AppLabel = props =>
    <label for={props.forHtml}>
      {props.text}
    </label>;

export default AppLabel;
