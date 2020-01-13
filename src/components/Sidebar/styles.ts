import { makeStyles } from '@material-ui/core/styles'

import { Theme } from '../../config/theme';

export const useStyles = makeStyles((theme: Theme) => ({
  drawer: {},
  drawerDesktop: {
    width: '100%',
    position: 'absolute',
  },
  drawerDesktopCollapsed: {
    overflowX: 'hidden',
  },
  sidebarContainer: {
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      width: theme.sidebar.width,
      flexShrink: 0,
    },
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  sidebarContainerDesktop: {
    width: theme.sidebar.width,
  },
  sidebarContainerDesktopDrawerCollapsed: {
    [theme.breakpoints.up('md')]: {
      width: theme.sidebar.widthCollapsed,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
}));