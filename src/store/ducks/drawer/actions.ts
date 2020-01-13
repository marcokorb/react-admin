import { action } from 'typesafe-actions';
import { DrawerTypes } from './types';

export const openDrawer = () => action(DrawerTypes.OPEN_DRAWER);
export const drawerOpened = () => action(DrawerTypes.DRAWER_OPENED);

export const closeDrawer = () => action(DrawerTypes.CLOSE_DRAWER);
export const drawerClosed = () => action(DrawerTypes.DRAWER_CLOSED);

export const toggleDrawer = () => action(DrawerTypes.TOGGLE_DRAWER);
export const drawerToggled = () => action(DrawerTypes.DRAWER_TOGGLED);