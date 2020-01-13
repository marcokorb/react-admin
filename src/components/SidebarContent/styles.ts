import { makeStyles } from '@material-ui/core/styles';

import { Theme } from '../../config/theme';

export const useStyles = makeStyles((theme: Theme) => ({
  sidebar: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    color: theme.sidebar.color,
    background: theme.sidebar.background,
    overflowX: 'hidden',
    overflowY: 'auto',
  },
  sidebarHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  sidebarTitleLink: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex'
  },
  logo: {
    color: theme.palette.primary.main,
  },
  title: (props: any) => ({
    position: 'relative',
    overflow: 'visible',
    marginLeft: '5px',
    // display: props.isDesktop && props.isSidebarCollapsedDesktop ? 'none' : 'block',
  }),
  name: {},
  tagline: {
    fontSize: 8,
    fontWeight: 'bold',
    position: 'absolute',
    top: '100%',
    marginTop: -5,
    background: theme.palette.primary.main,
    color: '#fff',
    borderRadius: 2,
    padding: '1px 3px',
    right: 0,
  },
}));