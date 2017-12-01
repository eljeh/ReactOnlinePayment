import { connect } from 'react-redux';

import { appBusy, appNotBusy } from '@/actions/app.actions';
import { createToken, error, complete } from '@/actions/bambora.actions';
import App from '@/components/app/app.component';

export const mapStateToProps = state => ({
  isBusy: state.app.busy,
  hasError: state.bambora.errors.length !== 0
});

export const mapDispatchToProps = dispatch => ({
  onToggleBusy: isBusy => dispatch(isBusy ? appBusy() : appNotBusy()),
  onError: result => dispatch(error(result)),
  onComplete: () => dispatch(complete()),
  onCreateToken: () => dispatch(createToken())
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
