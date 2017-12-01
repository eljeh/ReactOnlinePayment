import { types } from '@/actions/app.actions';
import { createReducer } from './reducer-utils';

const initial = Object.freeze({ busy: false });
const reducer = createReducer(initial, {
  [types.busy]: (state, action) => ({ ...state, busy: action.payload })
});

export default reducer;
