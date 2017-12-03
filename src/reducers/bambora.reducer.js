import { types } from '@/actions/bambora.actions';
import { createReducer } from './reducer-utils';

const initial = Object.freeze({ errors: [] });
const reducer = createReducer(initial, {
  [types.error]: (state, action) => ({ ...state, errors: [...state.errors, action.payload] }),
  [types.complete]: state => ({ ...state, errors: [] }),
  [types.createToken]: (state, action) => ({ ...state, token: action.payload })
});

export default reducer;
