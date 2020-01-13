import React from 'react';
import clsx from 'clsx';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { ApplicationState } from '../../store';

import * as DrawerActions from '../../store/ducks/drawer/actions';
import { DrawerState } from '../../store/ducks/drawer/types';

import { useStyles } from './styles';

interface StateProps {
  drawer: DrawerState;
}

interface DispatchProps {
  toggleDrawer(): void;
}

type Props = StateProps & DispatchProps;

const Header: React.FC<Props> = ({ drawer, toggleDrawer }) => {

  const classes = useStyles();

  return (
    <div className={clsx(
      classes.headerContainer,
      classes.headerContainerDesktop,
      drawer.opened &&
        classes.headerContainerDesktopDrawerCollapsed,
    )}>
      <AppBar
        position="absolute"
        className={classes.header}
        >
        <Toolbar className={classes.toolbar}> 
          <IconButton
            aria-label="menu"
            color="inherit"
            edge="start"
            className={classes.menuButton}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            className={classes.title}
          >
            News
          </Typography>
          <Button color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  ); 
}

const mapStateToProps = ({ drawer }: ApplicationState) => ({ drawer });

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators(DrawerActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);