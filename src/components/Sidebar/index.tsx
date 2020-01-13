import React from 'react';
import clsx from 'clsx';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';

import { ApplicationState } from '../../store';
import * as DrawerActions from '../../store/ducks/drawer/actions';
import { DrawerState } from '../../store/ducks/drawer/types';
import SidebarContent from '../SidebarContent';

import { useStyles } from './styles';

interface StateProps {
  drawer: DrawerState;
}

interface DispatchProps {
  closeDrawer(): void;
}

type Props = StateProps & DispatchProps;

const Sidebar: React.FC<Props> = ({ drawer, closeDrawer }) => {

  const classes = useStyles();

  return (
      <div
        className={clsx(
          classes.sidebarContainer,
          classes.sidebarContainerDesktop,
          drawer.opened &&
            classes.sidebarContainerDesktopDrawerCollapsed,
        )}
      >
        <Drawer
          classes={{
            paper: clsx(
              classes.drawer,
              classes.drawerDesktop,
              drawer.opened && classes.drawerDesktopCollapsed,
            ),
          }}
          variant="permanent"
        >
          <SidebarContent />
        </Drawer>
      </div>
  );
}

const mapStateToProps = ({ drawer }: ApplicationState) => ({ drawer });

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators(DrawerActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
