import produce, { Draft } from 'immer';
import { Reducer } from 'redux';
import { DrawerState, DrawerTypes } from './types';

const INITIAL_STATE: DrawerState = {
  opened: true
};

const reducers: Reducer<DrawerState> = produce(
  (draft: Draft<DrawerState>, action) => {
    
    switch (action.type) {
        case DrawerTypes.OPEN_DRAWER:
          draft.opened = true;
          break;
        case DrawerTypes.CLOSE_DRAWER:
          draft.opened = false;
          break;
        case DrawerTypes.TOGGLE_DRAWER:
          draft.opened = !draft.opened;
          break;
        default:
          break;
    }

    return draft;
  },
  INITIAL_STATE
);

export default reducers;