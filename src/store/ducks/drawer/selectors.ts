import { createSelector } from 'reselect';

import { ApplicationState } from '../../../store';

export const getDrawer = (state: ApplicationState) => state.drawer;

export const isDrawerOpened = createSelector(
  getDrawer,
  ({ open }) => open
);
