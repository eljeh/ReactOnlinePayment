/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';

import CreditCardNumber from '../../../src/components/app/credit.card.number.component';

describe('when CreditCardNumber component is created', () => {
  it('should mount the Bambora field', () => {
    const tree = renderer.create(<CreditCardNumber></CreditCardNumber>).toTree();
    console.log(tree);
    //TODO: How to assert custom checkout was called?
  });
});
