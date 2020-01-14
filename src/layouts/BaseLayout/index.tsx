import React, { ReactChildren } from 'react';
import clsx from 'clsx';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';

import { DrawerState } from 'src/store/ducks/drawer/types';
import { ApplicationState } from 'src/store';
import Header from 'src/components/Header';
import Sidebar from 'src/components/Sidebar';

import { useStyles } from './styles';

type StateProps = {
  children?: ReactChildren;
  drawer: DrawerState;
};

const BaseLayout: React.FC<StateProps> = ({ drawer, children }: StateProps) => {

  const classes = useStyles();

  return (
    <div className={classes.dashboardContainer}>
      <div className={clsx(
        classes.headerContainer,
        classes.headerContainerDesktop,
        drawer.opened &&
          classes.headerContainerDesktopDrawerCollapsed,
      )}>
        <Header />
      </div>
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
          <Sidebar />
        </Drawer>
      </div>
      <main className={classes.content}>
        <div className={classes.headerSpacer} />
        {children}
      </main>
    </div>
  );
}

const mapStateToProps = ({ drawer }: ApplicationState) => ({ drawer });

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BaseLayout);
