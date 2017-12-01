import checkout from '../services/bambora';

export const types = {
  createToken: 'CREATE_TOKEN',
  error: 'ERROR',
  complete: 'COMPLETE',
};

export const createToken = () => (dispatch) => {
  checkout.createToken(result => dispatch({ type: types.createToken, payload: result }));
};

export const error = result => ({ type: types.error, payload: result });

export const complete = () => ({ type: types.complete });
