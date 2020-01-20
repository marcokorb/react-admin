export enum DrawerTypes {
  OPEN_DRAWER = '@drawer/OPEN',
  DRAWER_OPENED = '@drawer/OPENED',
  CLOSE_DRAWER = '@drawer/CLOSE',
  DRAWER_CLOSED = '@drawer/CLOSED',
  TOGGLE_DRAWER = '@drawer/TOGGLE',
  DRAWER_TOGGLED = '@drawer/TOGGLED'
}

export interface DrawerState {
  readonly open: boolean
}
