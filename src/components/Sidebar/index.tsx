import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import Logo from 'src/common/Logo';
import { ApplicationState } from 'src/store';
import { DrawerState } from 'src/store/ducks/drawer/types';

import SidebarNav from '../SidebarNav';

import { useStyles } from './styles';

export type StateProps = {
  drawer: DrawerState;
}

const Sidebar: React.FC<StateProps> = (props: StateProps) => {

  const classes = useStyles(props);

  return (
    <aside className={classes.sidebar}>
      <div className={classes.sidebarHeader}>
        <Link to="/" className={classes.sidebarTitleLink}>
          <Logo size={30} className={classes.logo} />
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            noWrap
            className={classes.title}
          >
            <span className={classes.name}>Material Admin</span>
            <span className={classes.tagline}>ReactJS + MaterialUI</span>
          </Typography>
        </Link>        
      </div>
      <SidebarNav />
    </aside>
  );
}

const mapStateToProps = ({ drawer }: ApplicationState) => ({ drawer });

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
