import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Theme } from 'src/config/theme';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dashboardContainer: {
      display: 'flex',
      background: '#f5f5f5',
    },
    headerContainer: {
      top: 0,
      left: 0,
      right: 0,
      position: 'absolute',
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    headerContainerDesktop: {
      left: 'auto',
      width: `calc(100% - ${theme.sidebar.width}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    headerContainerDesktopDrawerCollapsed: {
      width: `calc(100% - ${theme.sidebar.widthCollapsed}px)`,
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
    sidebarContainerMobile: {
      width: 0,
    },
    sidebarContainerDesktop: {
      width: theme.sidebar.width,
    },
    sidebarContainerDesktopDrawerCollapsed: {
      [theme.breakpoints.up('md')]: {
        width: theme.sidebar.widthCollapsed,
      },
    },
    drawer: {},
    drawerMobile: {
      width: theme.sidebar.width,
    },
    drawerDesktop: {
      width: '100%',
      position: 'absolute',
    },
    drawerDesktopCollapsed: {
      overflowX: 'hidden',
    },
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
      flexDirection: 'column',
      display: 'flex',
    },
    fixedHeight: {
      height: 240,
    },
    headerSpacer: theme.mixins.toolbar,
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    }
  })
);