import React from 'react';
import ReactDOM from 'react-dom';
import checkout from './../../services/bambora';

import styles from './bambora.component.scss';

class CreditCardCvv extends React.Component {
  render() {
    const classNames = [styles.field, styles.small].join(' ');
    return (
      <div id="credit-card-cvv" ref="parent" className={classNames}>
      </div>
    );
  }

  componentDidMount() {
    const parentElement = ReactDOM.findDOMNode(this.refs.parent);
    const style = {
      base: {
          fontFamily: 'Verdana',
          fontSize: '1rem',
          padding: '10px 0'
      },
      error: {
          color: 'red !important',
          fontWeight: 'bold'
      }
    };
    checkout.create('cvv', { style })
      .mount(`#${parentElement.id}`);
  }
}

export default CreditCardCvv;
