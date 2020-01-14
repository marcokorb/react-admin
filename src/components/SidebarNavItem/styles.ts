import { makeStyles, createStyles } from '@material-ui/core/styles';

import { Theme } from 'src/config/theme';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // nested: {
    //   paddingLeft: theme.spacing(10),
    // },
    navItemWrapper: {
      position: 'relative',
    },
    navItemWrapperActive: {
      // background: 'rgba(0, 0, 0, 0.08)',
    },
    navItemWrapperActiveCollapsed: {
      background: 'rgba(0, 0, 0, 0.08)',
    },
    navItem: {
      position: 'relative',
      transition: 'background .23s ease',
      '&.active': {
        color: theme.palette.secondary.main,
        // background: 'rgba(0, 0, 0, 0.08)',
        '& .MuiListItemIcon-root': {
          // color: '#fff',
          color: theme.palette.secondary.main,
        },
      },
    },
    navItemChildren: {
      transition: 'background .23s ease',
      // position: 'absolute',
    },
    navItemChildrenActive: {
      // background: 'rgba(0, 0, 0, 0.1)',
    },
    navItemCollapsed: {
      whiteSpace: 'nowrap',
      flexWrap: 'nowrap',
      width: theme.sidebar.widthCollapsed,
      '& $iconToggle': {
        position: 'absolute',
        bottom: -1,
        fontSize: 14,
        left: '50%',
        marginLeft: '-0.5em',
      },
      '&.active': {
        background: 'rgba(0, 0, 0, 0.08)',
      },
    },
    navItemCollapsedWrapper: {
      width: theme.sidebar.widthCollapsed,
    },
    navItemIcon: {
      minWidth: 40,
    },
    iconToggle: {},
    iconSpacer: {
      fontSize: 13,
      marginLeft: 6,
    }
  })
);