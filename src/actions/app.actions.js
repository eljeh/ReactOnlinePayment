export const types = {
  busy: 'APP_BUSY'
};

export const appBusy = () => ({ type: types.busy, payload: true });

export const appNotBusy = () => ({ type: types.busy, payload: false });
