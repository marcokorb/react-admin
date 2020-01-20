import React, { ReactChildren } from 'react';
import clsx from 'clsx';

import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';

import { ApplicationState } from '../../store';
import { toggleDrawer } from 'src/store/ducks/drawer/actions';
import { isDrawerOpened } from '../../store/ducks/drawer/selectors';

import Header from './Header';
import Sidebar from './Sidebar';

import { useStyles } from './styles';

type DispatchProps = {
  toggleDrawer(): void;
}

type StateProps = {
  children?: ReactChildren;
  drawerOpened: boolean;
};

type Props = DispatchProps & StateProps;

const BaseLayout: React.FC<Props> = ({ drawerOpened, children, toggleDrawer }: Props) => {

  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = !isDesktop;

  return (
    <div className={classes.dashboardContainer}>
      <div className={clsx(
        classes.headerContainer,
        isDesktop && classes.headerContainerDesktop,
        isDesktop && 
          !drawerOpened &&
          classes.headerContainerDesktopDrawerCollapsed,
      )}>
        <Header />
      </div>
      <div
        className={clsx(
          classes.sidebarContainer,
          isMobile && classes.sidebarContainerMobile,
          isDesktop && classes.sidebarContainerDesktop,
          isDesktop && 
            !drawerOpened &&
            classes.sidebarContainerDesktopDrawerCollapsed,
        )}
      >
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={isMobile && drawerOpened}
            onClose={toggleDrawer}
            classes={{
              paper: clsx(classes.drawer, classes.drawerMobile),
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <Sidebar
              drawerOpened={drawerOpened}
            />
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: clsx(
                classes.drawer,
                classes.drawerDesktop,
                !drawerOpened && classes.drawerDesktopCollapsed,
              ),
            }}
            variant="permanent"
          >
            <Sidebar
              drawerOpened={drawerOpened}
            />
          </Drawer>
        </Hidden>
      </div>
      <main className={classes.content}>
        <div className={classes.headerSpacer} />
        {children}
      </main>
    </div>
  );
}

const mapStateToProps = (state: ApplicationState) => ({ 
  drawerOpened: isDrawerOpened(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators({ toggleDrawer }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BaseLayout);
