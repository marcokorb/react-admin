import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Theme } from '../../config/theme';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    header: {
      boxShadow: 'none',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);
