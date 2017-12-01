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
      <div id="credit-card-number" ref="parent" width='200px' className={styles.field}>
      </div>
    );
  }

  componentDidMount() {
    const parent = ReactDOM.findDOMNode(this.refs.parent);
    checkout.create('card-number', { style, brands })
      .mount(`#${parent.id}`);

    checkout.on('error', () => this.props.onError());
    checkout.on('complete', () => this.props.onComplete());
  }
}

CreditCardNumber.propType = {
  onError: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired
};

export default CreditCardNumber;
