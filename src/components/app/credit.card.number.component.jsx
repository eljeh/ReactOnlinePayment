import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import checkout from './../../services/bambora';
import styles from './bambora.component.scss';

const brands = ['mastercard', 'visa'];
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

class CreditCardNumber extends React.Component {
  render() {
    return (
      <div id="card-number" ref="parent" className={styles.field}></div>
    );
  }

  componentDidMount() {
    const host = ReactDOM.findDOMNode(this);
    checkout
      .create('card-number', { style, brands, placeholder: '**** **** **** ****' })
      .mount(`#${host.id}`);

    checkout.on('error', result => this.props.onError(result));
    checkout.on('complete', () => this.props.onComplete());
  }
}

CreditCardNumber.propType = {
  onError: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired
};

export default CreditCardNumber;
