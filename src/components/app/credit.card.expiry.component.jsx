import React from 'react';
import ReactDOM from 'react-dom';
import checkout from './../../services/bambora';

import styles from './bambora.component.scss';

class CreditCardExpiry extends React.Component {
  render() {
    return (
      <div id="credit-card-expiry" ref="parent" width='200px' className={styles.field}>
      </div>
    );
  }

  componentDidMount() {
    const parent = ReactDOM.findDOMNode(this.refs.parent);
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
    checkout.create('expiry', { style })
      .mount(`#${parent.id}`);
  }
}

export default CreditCardExpiry;
