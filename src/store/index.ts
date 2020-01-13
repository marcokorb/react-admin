import { createStore, applyMiddleware, Store } from 'redux';

import { DrawerState } from './ducks/drawer/types';
import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';
import middlewares, { sagaMiddleware } from './middlewares';

export interface ApplicationState {
  drawer: DrawerState
}

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
