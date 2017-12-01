import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CreditCardNumber from './credit.card.number.component';
import CreditCardExpiry from './credit.card.expiry.component';
import CreditCardCvv from './credit.card.cvv.component';
import Button from './button.component';
import Label from './app.label';
import Input from './app.input';

import styles from './app.component.scss';

const App = (props) => {
  const iconClasses = classNames({
    fa: true,
    'fa-cog': props.isBusy,
    'fa-spin': props.isBusy,
    'fa-arrow-right': !props.isBusy,
  });
  return (
    <div>
      <div className={styles.intro} onClick={() => props.onToggleBusy(!props.isBusy)}>
        <div>{props.isBusy ? 'Stop the OLP magic' : 'Start the OLP magic'}</div>
        <i className={iconClasses}/>
      </div>
      <div className="row">
        <Label forHtml="CardHolderName" text="Card Holder Name" />
        <input id="CardHolderName" name="Card Holder Name" type="text" placeholder="Enter Name of card" class="form-control"/>
      </div>
      <div>
        <Label forHtml="over18" text="over 18 years of age" />
        <input id="over18" name="over18" type="checkbox"/>
      </div>
      <CreditCardNumber onError={event => props.onError(event)} onComplete={() => props.onComplete()}/>
      <CreditCardExpiry />
      <CreditCardCvv />
      <Button classNames={'foo'} hasError={props.hasError} onClick={() => props.onCreateToken()} class="btn"/>
    </div>
  );
};

App.propType = {
  isBusy: PropTypes.bool.isRequired,
  hasError: PropTypes.object.isRequired,
  onToggleBusy: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
  onCreateToken: PropTypes.func.isRequired
};

export default App;
