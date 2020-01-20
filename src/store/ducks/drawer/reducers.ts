import produce, { Draft } from 'immer';
import { Reducer } from 'redux';
import { DrawerState, DrawerTypes } from './types';

const INITIAL_STATE: DrawerState = {
  open: true
};

const reducers: Reducer<DrawerState> = produce(
  (draft: Draft<DrawerState>, action) => {
    
    switch (action.type) {
        case DrawerTypes.OPEN_DRAWER:
          draft.open = true;
          break;
        case DrawerTypes.CLOSE_DRAWER:
          draft.open = false;
          break;
        case DrawerTypes.TOGGLE_DRAWER:
          draft.open = !draft.open;
          break;
        default:
          break;
    }

    return draft;
  },
  INITIAL_STATE
);

export default reducers;
