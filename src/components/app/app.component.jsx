import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CreditCardNumber from './credit.card.number.component';
import CreditCardExpiry from './credit.card.expiry.component';
import CreditCardCvv from './credit.card.cvv.component';
import Button from './button.component';
import Label from './label.component';
import Input from './input.component';

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
    <form id="payment-form">
      <div className="row form-field-wrapper">
        <div id="paymentInfo" className="large-12 column">
          <div id="feedback"></div>
          <div className="row">
            <div id="paymentTitle" className="large-10 columns">
                <span className="fa-stack fa-2x">
                    <span className="fa fa-square fa-stack-2x"></span>
                    <span className="fa fa-lock fa-stack-1x fa-inverse"></span>
                </span>
                <h3>Secure Payment</h3>
            </div>
            <div id="paymentInput" className="large-2 columns">
                <div id="currentBalance">
                    <strong>Current Balance</strong><div>$0.00</div>
                </div>
                <Label htmlFor="PaymentAmount" text="Payment Amount" />
                <input id="PaymentAmount" name="PaymentAmount" type="number" placeholder="" className="form-control"/>
            </div>
            <div id="reviewTitle" className="large-12 columns">
                <span className="fa-stack fa-2x">
                    <span className="fa fa-square fa-stack-2x"></span>
                    <span className="fa fa-thumbs-up fa-stack-1x fa-inverse"></span>
                </span>
                <h3>Please review your payment information before subitting</h3>
            </div>
          </div>

          <div id="payment-inputs" className="large-12 columns">

            <div className="row">
              <div id="cardInfo" className="large-6 column vertHr-right">

                <h4>Card Information</h4>
                <div className="row">
                  <div className="large-3 columns">
                    <ul className="inline-list cardList">
                        <li>
                            <img src="https://cdn.na.bambora.com/downloads/images/cards/visa.svg" title="Visa logo"/>
                        </li>
                        <li>
                            <img src="https://cdn.na.bambora.com/downloads/images/cards/mastercard.svg" title="Mastercard logo"/>
                        </li>
                    </ul>
                  </div>
                  <div className="large-9 columns">
                      Visa and MasterCard payments will incur a {0}% fee. Debit Visa and MasterCard Debit have no extra fees.
                  </div>
                </div>

                <div className="row">
                  <div className="small-12 columns">
                    <Label htmlFor="CardholderName" text="Cardholder Name" />
                    <input id="CardholderName" name="CardholderName" type="text" placeholder="Enter Name on card" className="form-control"/>
                  </div>
                </div>
                <div className="row">
                  <div className="small-12 columns">
                    <Label htmlFor="card-number" text="Card Number" />
                    <CreditCardNumber onError={event => props.onError(event)} onComplete={() => props.onComplete()}/>
                  </div>
                  <div id="card-number-error" className="large-12 columns"></div>
                </div>

                <div className="row">
                  <div className="small-6 columns expiry-div">
                    <Label htmlFor="card-expiry" text="Expiry date" />
                    <CreditCardExpiry />
                  </div>
                  <div className="small-6 columns cvv-div">
                    <div className="cvvImage"></div>
                    <Label htmlFor="card-cvv" text="CVV" />
                    <em className="cvvInfo fa fa-question-circle"></em>
                    <CreditCardCvv />
                  </div>
                </div>

                <div id="card-expiry-error" className="large-12 columns"></div>
                <div id="card-cvv-error" className="large-12 columns"></div>

              </div>

              <div id="billingInfo" className="large-6 column">

                <hr />

                <div className="row">
                    <div className="small-12 columns">
                        <h4>Billing Information</h4>
                    </div>
                </div>

                <div className="row">
                    <div className="small-12 columns">
                      <Label htmlFor="address_line1" text="Address Line 1" />
                      <input id="address_line1" name="address_line1" type="text" placeholder="" className="form-control"/>
                    </div>
                </div>

                <div className="row">
                    <div className="small-12 columns">
                      <Label htmlFor="address_line2" text="Address Line 2" />
                      <input id="address_line2" name="address_line2" type="text" placeholder="" className="form-control"/>
                    </div>
                </div>

                <div className="row">
                    <div className="small-12 medium-6 columns">
                      <Label htmlFor="city" text="City" />
                      <input id="city" name="city" type="text" placeholder="" className="form-control"/>
                    </div>

                    <div className="small-12 medium-6 columns">
                      <Label htmlFor="province" text="Province" />
                      <input id="province" name="province" type="text" placeholder="" className="form-control"/>
                    </div>
                </div>

                <div className="row">
                    <div className="small-12 medium-6 columns">
                      <Label htmlFor="postal_code" text="Postal Code" />
                      <input id="postal_code" name="postal_code" type="text" placeholder="" className="form-control"/>
                    </div>

                    <div className="small-12 medium-6 columns">
                      <Label htmlFor="country" text="Country" />
                      <input id="country" name="country" type="text" placeholder="" className="form-control"/>
                    </div>
                </div>

              </div>

            </div>

            <div className="row">
              <div className="large-6 columns">
                  <Button id="backButton" type="button" className="button left" text="Back" />
              </div>

              <div className="large-6 columns">
                  <Button id="nextButton" type="button" className="button" onClick={() => props.onClick()} text="Next" disabled={props.hasError} />
              </div>
            </div>

          </div>

          <div id="payment-review" className="large-12 columns">
            <div className="row">
              <div className="large-8 columns">
                  <dl className="reviewDetails">
                      <dt>Cardholder Name:</dt>
                      <dd id="reviewCardName"></dd>
                      <dt>Card Number Ending With:</dt>
                      <dd id="reviewCardNumber"></dd>
                      <dt>Payment Amount:</dt>
                      <dd id="enteredAmount"></dd>
                      <dt>Electronic Payment Service Fee:</dt>
                      <dd id="fee"></dd>
                      <dt>Total amount that will be charged:</dt>
                      <dd id="totalCharge"></dd>
                  </dl>
              </div>

              <div className="large-4 columns">

                  <div className="row">
                      <div className="large-12 columns">
                        <Button id="editButton" type="button" className="button" text="Edit Information" />
                      </div>

                      <div className="large-12 columns">
                        <Button id="payButton" type="submit" className="button" text="Submit" disabled=""/>
                      </div>
                  </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </form>

    <Button hasError={props.hasError} onClick={() => props.onCreateToken()} />

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
