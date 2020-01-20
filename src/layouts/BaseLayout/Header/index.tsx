import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import * as DrawerActions from 'src/store/ducks/drawer/actions';

import { useStyles } from './styles';

type DispatchProps = {
  toggleDrawer(): void;
}

const Header: React.FC<DispatchProps> = ({ toggleDrawer }: DispatchProps) => {

  const classes = useStyles();

  return (
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
  ); 
}

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators(DrawerActions, dispatch);

export default connect(null, mapDispatchToProps)(Header);