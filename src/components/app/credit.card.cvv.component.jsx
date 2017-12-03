import React from 'react';
import ReactDOM from 'react-dom';
import checkout from './../../services/bambora';

import styles from './bambora.component.scss';

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
class CreditCardCvv extends React.Component {
  render() {
    return (
      <div id="card-cvv" ref="parent" className={styles.field}>
      </div>
    );
  }

  componentDidMount() {
    const host = ReactDOM.findDOMNode(this);
    checkout
      .create('cvv', { style, placeholder: '***' })
      .mount(`#${host.id}`);
  }
}

export default CreditCardCvv;
