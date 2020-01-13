import React from 'react'
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

import IconDashboard from '@material-ui/icons/Dashboard';
import IconProducts from '@material-ui/icons/LocalMall';


import { ApplicationState } from '../../store';

import { DrawerState } from '../../store/ducks/drawer/types';


import { useStyles } from './styles';

import SidebarNavItems from '../SidebarNavItems';

interface StateProps {
  drawer: DrawerState;
}

const SidebarNav: React.FC<StateProps> = ({ drawer }) => {

  const classes = useStyles()

  const itemsSales = [
    {
      name: 'Sales Dashboard',
      link: '/sales/dashboard',
      Icon: IconDashboard,
    },
    {
      name: 'Products',
      Icon: IconProducts,
      items: [
        {
          name: 'All Products',
          link: '/sales/products',
        },
        {
          name: 'Add New',
          link: '/sales/products/new',
        },
        {
          name: 'Categories',
          link: '/sales/products/categories',
        },
      ],
    },
  ];

  // eslint-disable-next-line
  const itemsContent = [
    {
      name: 'All Items',
      link: '/content/items',
    },
    {
      name: 'Add New',
      link: '/content/items/new',
    },

    {
      name: 'Categories',
      link: '/content/categories',
    },
  ];

  return (
    <div>
      <List className={classes.navList} disablePadding>
        {!drawer.opened && (
          <ListSubheader disableSticky={true} className={classes.navListHeader}>
            Applications
          </ListSubheader>
        )}
        <SidebarNavItems items={itemsSales} />
      </List>

      <List className={classes.navList} disablePadding>
        {!drawer.opened && (
          <ListSubheader disableSticky={true} className={classes.navListHeader}>
            Basic Functionality
          </ListSubheader>
        )}
        <SidebarNavItems items={itemsContent} />
      </List>
     
    </div>
  )
}

const mapStateToProps = ({ drawer }: ApplicationState) => ({ drawer });
const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators({}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(SidebarNav);