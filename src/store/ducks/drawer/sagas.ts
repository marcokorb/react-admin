import { all, put, takeEvery } from 'redux-saga/effects';

import { DrawerTypes } from './types';
import { drawerOpened, drawerClosed, drawerToggled } from './actions';

function* opened(): Generator {
  yield put(drawerOpened());
}

function* watchOpen(): Generator {
  yield takeEvery(DrawerTypes.OPEN_DRAWER, opened)
}

function* close() {
  yield put(drawerClosed());
}

function* watchClose(): Generator {
  yield takeEvery(DrawerTypes.CLOSE_DRAWER, close)
}

function* toggle() {
  yield put(drawerToggled());
}

function* watchToggle(): Generator {
  yield takeEvery(DrawerTypes.TOGGLE_DRAWER, toggle)
}

export default function* drawerRootSaga() {
  return yield all([
    watchOpen(),
    watchClose(),
    watchToggle()
  ]);
}
