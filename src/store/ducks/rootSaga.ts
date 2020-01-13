import { all, fork } from 'redux-saga/effects';

import drawerSaga from './drawer/sagas';

export default function* rootSaga() {
  return yield all([fork(drawerSaga)]);
}
